require('es6-promise').polyfill();
require('isomorphic-fetch');

(async(loginName) => {
    try{
        let response = await fetch(`https://api.github.com/users/${loginName}/followers`);
        let json = await response.json();
        let followerList = json.map(user => user.login);
        console.log(followerList);
    } catch(e) {
        console.log('you dun goofed', e);
    }
})('zrayyes');