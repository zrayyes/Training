from flask import request, jsonify
from . import api

def unauthorized(message):
    response = jsonify({"error":"unauthorized",'message': message})
    return response, 401

def forbidden(message):
    response = jsonify({"error":"forbidden",'message': message})
    return response, 403

@api.app_errorhandler(404)
def resource_not_found(e):
    # Check if the resource is expecting HTML
    if request.accept_mimetypes.accept_json and \
        not request.accept_mimetypes.accept_html:
        response = jsonify({'error': 'not found'})
        return response, 404
    return "<H3>404</H3>", 404