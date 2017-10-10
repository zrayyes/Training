const express = require('express');
const router = express.Router();

router.get('/speakers', (req,res)=>{
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;
    data.speakers.forEach(item => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('speakers',{
        pageTitle: 'Speakers',
        artwork: pagePhotos,
        pageID: 'speakers',
        speakers: pageSpeakers
    });
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
                    <p>${speaker.summary}</p>
<script src="/reload/reload.js"></script>`);
});

module.exports = router;