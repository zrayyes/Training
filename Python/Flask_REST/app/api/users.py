from . import api

@api.route("/users/all")
def index():
    return "hello"