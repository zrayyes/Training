from flask import g
from flask_httpauth import HTTPBasicAuth
from .errors import unauthorized, forbidden
from . import api

auth = HTTPBasicAuth()

@auth.error_handler
def auth_error():
    return unauthorized("Invalid Credentials!")

@auth.verify_password
def verify_password(email, password):
    if email == "":
        return False
    user = {"email": "email", "password": "password"}
    if not user:
        return False
    g.current_user = user
    return user["password"] == password

@api.before_request
@auth.login_required
def before_request():
    if not g.current_user["email"]:
        return forbidden('Unconfirmed account')