from flask import Flask, request, make_response, redirect, abort, render_template, url_for
app = Flask(__name__)

# could also work with app.add_url_rule('/', 'index', index)
@app.route('/')
def index():
    user_agent = request.headers.get('User-Agent')
    return render_template("index.html"), 200

@app.route('/user/<name>')
def user(name):
    if name == "abort":
        abort(404)
    response = make_response(render_template("user.html", name=name))
    response.status_code = 200
    return response

@app.route("/redirect")
def nothing():
    return redirect(url_for('index'))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404