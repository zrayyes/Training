from . import api
from .authentication import auth

@api.route('/posts/')
def get_posts():
    return "posts"