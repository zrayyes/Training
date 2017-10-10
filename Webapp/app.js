const express = require('express');
const reload = require('reload');
const app = express();
const dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;


app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

const server = app.listen(app.get('port'), ()=> {
    console.log(`Server started on port ${app.get('port')} ...`);
});

reload(app);