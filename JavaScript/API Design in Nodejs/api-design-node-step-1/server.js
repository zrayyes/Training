// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const jsonData = {count: 12, message: 'hey'};

app.get('/',(req,res) => {
    res.sendFile(__dirname+'\\index.html');
});

app.get('/data',(req,res) => {
    res.json(jsonData);
});

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
});
