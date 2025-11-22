from django.urls import path, include
from django.views.generic import TemplateView
from django.http import JsonResponse


def healthz(_request):
    return JsonResponse({"status": "ok", "app": "root", "debug": True})

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('healthz', healthz, name='healthz'),
    path('inference/', include('webapp.inference.urls')),
]
