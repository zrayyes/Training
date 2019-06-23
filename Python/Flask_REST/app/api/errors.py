from flask import request, jsonify
from . import api

@api.app_errorhandler(404)
def resource_not_found(e):
    # Check if the resource is expecting HTML
    if request.accept_mimetypes.accept_json and \
        not request.accept_mimetypes.accept_html:
        response = jsonify({'error': 'not found'})
        response.status_code = 404
        return response
    return "<H3>404</H3>", 404