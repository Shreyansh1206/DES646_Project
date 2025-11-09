import os
from pathlib import Path

# BASE_DIR is the webapp package directory (webapp/webapp)
BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'change-me-for-production'

DEBUG = True

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.staticfiles',
    # inference app lives inside the webapp package
    'webapp.inference',
]

MIDDLEWARE = [
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'webapp.webapp.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {},
    }
]

WSGI_APPLICATION = 'webapp.webapp.wsgi.application'

STATIC_URL = '/static/'
# Optional project-level static dir; silence warning if absent.
STATICFILES_DIRS = []
