import os
from pathlib import Path

# BASE_DIR is the webapp package directory (webapp/webapp)
BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'dev-insecure-change-me')

DEBUG = os.environ.get('DJANGO_DEBUG', '1') == '1'

ALLOWED_HOSTS = os.environ.get('DJANGO_ALLOWED_HOSTS', '*').split(',')

INSTALLED_APPS = [
    'django.contrib.staticfiles',
    # third-party
    'corsheaders',
    # inference app lives inside the webapp package
    'webapp.inference',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
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

# CORS (open by default; restrict in production via env)
if os.environ.get('CORS_ALLOW_ALL', '1') == '1':
    CORS_ALLOW_ALL_ORIGINS = True
else:
    CORS_ALLOWED_ORIGINS = [
        *(o for o in os.environ.get('CORS_ALLOWED_ORIGINS', '').split(',') if o)
    ]
    CORS_ALLOW_CREDENTIALS = False

# Minimal SQLite database configuration for development.
# Required even if the app doesn't use Django models, so that management
# commands like 'runserver' and 'migrate' don't fail with ImproperlyConfigured.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
