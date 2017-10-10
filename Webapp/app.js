const express = require('express');
const app = express();
const dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res)=>{
    res.send(`<h1>Welcome</h1>
                <p>Roux Academy Meetups put together artists from all walks of life</p>`);
});

app.get('/speakers', (req,res)=>{
    let info = '';
    dataFile.speakers.forEach(item => {
        info += `<li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>`;
    });
    res.send(`<h1>Roux Academy Meetups</h1>${info}`);
});

app.get('/speakers/:speakerid', (req,res)=>{
    let speaker = dataFile.speakers[req.params.speakerid];
    res.send(`<h1>${speaker.title}</h1>
                <h2>with ${speaker.name}</h2>
                    <p>${speaker.summary}</p>`);
});

const server = app.listen(app.get('port'), ()=> {
    console.log(`Server started on port ${app.get('port')} ...`);
});