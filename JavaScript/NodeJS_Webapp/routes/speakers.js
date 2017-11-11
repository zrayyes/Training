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
        pageID: 'speakerList',
        speakers: pageSpeakers
    });
});

router.get('/speakers/:speakerid', (req,res)=>{
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = [];
    data.speakers.forEach(item => {
        if (item.shortname == req.params.speakerid){
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }
    });

    res.render('speakers',{
        pageTitle: 'Speaker Info',
        artwork: pagePhotos,
        pageID: 'speakerDetail',
        speakers: pageSpeakers
    });
});

module.exports = router;