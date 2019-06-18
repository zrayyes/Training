from flask import Flask, request, make_response, redirect, abort
app = Flask(__name__)

# could also work with app.add_url_rule('/', 'index', index)
@app.route('/')
def index():
    user_agent = request.headers.get('User-Agent')
    return '<p>Your browser is {}</p>'.format(user_agent), 200

@app.route('/user/<name>')
def user(name):
    if name == "abort":
        abort(404)
    response = make_response("<h1>Hello, {}</h1>".format(name))
    response.status_code = 200
    return response

@app.route("/redirect")
def nothing():
    return redirect("/")

# Could also be started with 
# if __name__ == "__main__":
#     app.run()