#!/usr/bin/env python
import os
import sys
from pathlib import Path

# Ensure the repository root is on sys.path so top-level modules (preProcessing, angleCalculator,
# motionClassification) can be imported regardless of the current working directory when running
# manage.py. manage.py lives in <repo>/webapp/manage.py so the repo root is two parents up.
repo_root = str(Path(__file__).resolve().parent.parent)
if repo_root not in sys.path:
    sys.path.insert(0, repo_root)

def main():
    # settings module lives at webapp/webapp/settings.py -> module path 'webapp.webapp.settings'
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webapp.webapp.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
