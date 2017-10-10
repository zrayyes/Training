const express = require('express');
const router = express.Router();

router.get('/speakers', (req,res)=>{
    let info = '';
    let dataFile = req.app.get('appData');
    dataFile.speakers.forEach(item => {
        info += `
      <h2>${item.name}</h2>
      <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker">
      <p>${item.summary}</p>
    `;
    });
    res.send(`
<link rel="stylesheet" href="/css/style.css">
<h1>Roux Academy Meetups</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px">${info}`);
});

router.get('/speakers/:speakerid', (req,res)=>{
    let dataFile = req.app.get('appData');
    let speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
<link rel="stylesheet" href="/css/style.css">
<h1>${speaker.title}</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px">
                <h2>with ${speaker.name}</h2>
                <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
                    <p>${speaker.summary}</p>`);
});

module.exports = router;