from . import api
from .errors import forbidden

@api.route("/users/all")
def index():
    return "hello"

@api.route("users/secret")
def secret():
    return forbidden("This is a sekrut")