const express = require('express');
const reload = require('reload');
const app = express();
const dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

const server = app.listen(app.get('port'), ()=> {
    console.log(`Server started on port ${app.get('port')} ...`);
});

reload(app);