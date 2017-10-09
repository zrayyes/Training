require('es6-promise').polyfill();
require('isomorphic-fetch');

// fetch('http://api.open-notify.org/astros.json')
//     .then(res => res.json())
//     .then(console.log);

const getSpacePeople = () =>
    fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json());

const spaceNames = () =>
    getSpacePeople()
        .then(json => json.people)
        .then(people => people.map(p => p.name))
        .then(names => names.join('\n'));

// getSpacePeople().then(console.log);
spaceNames().then(console.log);