const express = require('express');
const reload = require('reload');
const app = express();
const dataFile = require('./data/data.json');
const io = require('socket.io')();

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;


app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));


const server = app.listen(app.get('port'), ()=> {
    console.log(`Server started on port ${app.get('port')} ...`);
});

io.attach(server);
io.on('connection',(socket)=> {
    console.log('User connected');

    socket.on('postMessage', (data) => {
        io.emit('updateMessage', data);
    })
});

reload(app);