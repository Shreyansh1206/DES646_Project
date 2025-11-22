import os
import tempfile
import time
from django.http import StreamingHttpResponse, HttpResponseBadRequest, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from .services import stream_feedback_for_video


def health(request):
    """Duplicate health endpoint for environments resolving this app path.

    Some deployments may import the top-level `webapp.inference` instead of
    the nested `webapp.webapp.inference`. Provide the same JSON payload.
    """
    if request.method not in ("GET", "HEAD"):
        return HttpResponseNotAllowed(["GET", "HEAD"])
    return JsonResponse({
        "status": "ok",
        "service": "inference",
        "timestamp": time.time(),
        "debug": bool(os.environ.get("DJANGO_DEBUG")),
        "variant": "top-level",
        "models_present": all(os.path.exists(p) for p in [
            os.path.join(os.path.dirname(__file__), '..', '..', 'Model', 'autoEncoder', 'Deadlift', 'trainedModel.pth'),
            os.path.join(os.path.dirname(__file__), '..', '..', 'Model', 'autoEncoder', 'Squat', 'trainedModel.pth'),
            os.path.join(os.path.dirname(__file__), '..', '..', 'Model', 'autoEncoder', 'Pull_Up', 'trainedModel.pth'),
            os.path.join(os.path.dirname(__file__), '..', '..', 'Model', 'motionClassification', 'lstm_classification_model.pth'),
        ])
    })


@csrf_exempt
def upload_video(request):
    # Health check for frontend: allow HEAD/GET to confirm server is up
    if request.method in ('HEAD', 'GET'):
        from django.http import HttpResponse
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
                # generator finished immediately
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
