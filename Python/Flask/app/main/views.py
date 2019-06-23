from flask import render_template, abort, redirect, request, make_response, url_for
from . import main
# from .. import db

@main.route("/")
def index():
    user_agent = request.headers.get("User-Agent")
    return render_template("index.html"), 200


@main.route("/user/<name>")
def user(name):
    if name == "abort":
        abort(404)
    response = make_response(render_template("user.html", name=name))
    response.status_code = 200
    return response


@main.route("/redirect")
def nothing():
    # namespace.endpoint
    return redirect(url_for(".index"))