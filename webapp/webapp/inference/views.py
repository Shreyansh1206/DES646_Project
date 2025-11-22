import os
import tempfile
import time
from django.http import StreamingHttpResponse, HttpResponseBadRequest, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from .services import stream_feedback_for_video


def health(request):
    """Simple health/status endpoint.

    Returns a JSON payload indicating the service is running. Designed for
    external load balancers or frontend probes. Lightweight: no DB queries.
    """
    if request.method not in ("GET", "HEAD"):
        return HttpResponseNotAllowed(["GET", "HEAD"])
    payload = {
        "status": "ok",
        "service": "inference",
        "timestamp": time.time(),
        "debug": bool(os.environ.get("DJANGO_DEBUG")),
    }
    return JsonResponse(payload)


@csrf_exempt
def upload_video(request):
    if request.method != 'POST':
        return HttpResponseBadRequest('POST required')

    file = request.FILES.get('file')
    if not file:
        return HttpResponseBadRequest('No file provided')

    # Save to temporary file
    tmp = tempfile.NamedTemporaryFile(delete=False, suffix='.mp4')
    try:
        for chunk in file.chunks():
            tmp.write(chunk)
        tmp.flush()
        tmp.close()

        try:
            generator = stream_feedback_for_video(tmp.name)
            # advance generator once to catch import/initialization errors early
            try:
                first = next(generator)
            except StopIteration:
                return StreamingHttpResponse([], content_type='text/event-stream')
            except ImportError as e:
                from django.http import HttpResponse
                return HttpResponse(f"Dependency error: {e}. Install required packages.", status=500)
            except Exception as e:
                from django.http import HttpResponse
                return HttpResponse(f"Processing error: {e}", status=500)

            import itertools
            chained = itertools.chain([first], generator)
            response = StreamingHttpResponse(chained, content_type='text/event-stream')
            return response
        except Exception as e:
            from django.http import HttpResponse
            return HttpResponse(f"Processing error: {e}", status=500)
    finally:
        try:
            os.unlink(tmp.name)
        except Exception:
            pass
