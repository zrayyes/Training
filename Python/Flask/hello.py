from flask import Flask
app = Flask(__name__)

# could also work with app.add_url_rule('/', 'index', index)
@app.route('/')
def index():
    return "<h1>Hello, World!</h1>"

@app.route('/user/<name>')
def user(name):
    return "<h1>Hello, {}</h1>".format(name)


# Could also be started with 
# if __name__ == "__main__":
#     app.run()