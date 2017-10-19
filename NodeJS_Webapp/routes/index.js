const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;

    data.speakers.forEach(item => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('index',{
        pageTitle: 'Home',
        artwork: pagePhotos,
        pageID: 'home',
        speakers: pageSpeakers
    });
});

module.exports = router;