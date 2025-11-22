import os
import sys
from pathlib import Path

# Add the project root to Python path
project_root = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(project_root))

# Set up Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webapp.webapp.settings')

# Suppress Django's check for ALLOWED_HOSTS in serverless environment
os.environ.setdefault('DJANGO_ALLOWED_HOSTS', '*')

# Initialize Django
import django
django.setup()

from django.core.handlers.wsgi import WSGIHandler
from django.core.wsgi import get_wsgi_application

# Create the WSGI application
application = get_wsgi_application()

# Vercel serverless handler
def handler(event, context):
    """
    Main handler for Vercel serverless function.
    Converts Vercel's event to WSGI environ and processes through Django.
    """
    from io import BytesIO
    import json
    
    # Build WSGI environ from Vercel event
    environ = {
        'REQUEST_METHOD': event.get('httpMethod', 'GET'),
        'SCRIPT_NAME': '',
        'PATH_INFO': event.get('path', '/'),
        'QUERY_STRING': event.get('queryStringParameters', ''),
        'SERVER_NAME': event.get('headers', {}).get('host', 'localhost'),
        'SERVER_PORT': '443',
        'SERVER_PROTOCOL': 'HTTP/1.1',
        'wsgi.version': (1, 0),
        'wsgi.url_scheme': 'https',
        'wsgi.input': BytesIO(),
        'wsgi.errors': sys.stderr,
        'wsgi.multithread': False,
        'wsgi.multiprocess': False,
        'wsgi.run_once': False,
    }
    
    # Add headers to environ
    headers = event.get('headers', {})
    for key, value in headers.items():
        key = key.upper().replace('-', '_')
        if key == 'CONTENT_TYPE':
            environ['CONTENT_TYPE'] = value
        elif key == 'CONTENT_LENGTH':
            environ['CONTENT_LENGTH'] = value
        else:
            environ[f'HTTP_{key}'] = value
    
    # Handle request body
    body = event.get('body', '')
    if event.get('isBase64Encoded', False):
        import base64
        body = base64.b64decode(body)
    elif isinstance(body, str):
        body = body.encode('utf-8')
    
    environ['wsgi.input'] = BytesIO(body)
    environ['CONTENT_LENGTH'] = str(len(body))
    
    # Capture response
    response_data = {
        'statusCode': 200,
        'headers': {},
        'body': ''
    }
    
    def start_response(status, response_headers):
        response_data['statusCode'] = int(status.split()[0])
        for header, value in response_headers:
            response_data['headers'][header] = value
        return lambda data: None
    
    # Process through Django WSGI app
    try:
        response_body = b''.join(application(environ, start_response))
        
        # Handle streaming responses (for video processing feedback)
        if response_data['headers'].get('Content-Type') == 'text/event-stream':
            # Note: Vercel serverless functions don't support true streaming
            # This will buffer the entire response
            response_data['body'] = response_body.decode('utf-8', errors='replace')
        else:
            response_data['body'] = response_body.decode('utf-8', errors='replace')
        
    except Exception as e:
        import traceback
        response_data['statusCode'] = 500
        response_data['headers'] = {'Content-Type': 'application/json'}
        response_data['body'] = json.dumps({
            'error': str(e),
            'traceback': traceback.format_exc()
        })
    
    return response_data

# For local testing
if __name__ == '__main__':
    test_event = {
        'httpMethod': 'GET',
        'path': '/inference/upload_video',
        'headers': {'host': 'localhost:8000'},
        'body': '',
        'queryStringParameters': {}
    }
    print(handler(test_event, {}))

