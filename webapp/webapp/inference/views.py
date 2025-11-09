import os
import tempfile
from django.http import StreamingHttpResponse, HttpResponseBadRequest, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .services import stream_feedback_for_video


def health(request):
    """Lightweight health endpoint used by the frontend to verify backend reachability."""
    return JsonResponse({'status': 'ok'}, status=200)


@csrf_exempt
def upload_video(request):
    # Allow a HEAD probe from the frontend's connectivity check to return 200
    if request.method == 'HEAD':
        return HttpResponse(status=200)
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
                return HttpResponse(f"Dependency error: {e}. Install required packages.", status=500)
            except Exception as e:
                return HttpResponse(f"Processing error: {e}", status=500)

            import itertools
            chained = itertools.chain([first], generator)
            response = StreamingHttpResponse(chained, content_type='text/event-stream')
            return response
        except Exception as e:
            return HttpResponse(f"Processing error: {e}", status=500)
    finally:
        try:
            os.unlink(tmp.name)
        except Exception:
            pass
