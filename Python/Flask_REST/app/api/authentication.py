from flask_httpauth import HTTPBasicAuth
from .errors import unauthorized
auth = HTTPBasicAuth()

@auth.error_handler
def auth_error():
    return unauthorized("Invalid Credentials!")

@auth.verify_password
def verify_password(email, password):
    if email == "":
        return False
    user = {"email": "email", "password": "passsword"}
    if not user:
        return False
    g.current_user = user
    return user["password"] == password