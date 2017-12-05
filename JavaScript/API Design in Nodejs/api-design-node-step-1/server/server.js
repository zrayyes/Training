// TODO: make this work.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');

app.use(express.static('client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


let lions = [];
let id = 0;

// TODO: make the REST routes to perform CRUD on lions

// GET
app.get('/lions',(req,res) => {
    res.json(lions);
});

// GET by ID
app.get('/lions/:id',(req,res) => {
    let selectedId = Number(req.params.id);
    selectedLion = lions.filter(lion => lion.id === selectedId)[0];
    res.json(selectedLion || {});
});

// POST
app.post('/lions',(req,res) => {
    let newLion = req.body;
    id += 1;
    newLion.id = id;

    lions.push(newLion);

    res.json(lions);
});

// PUT
app.put('/lions/:id',(req,res) => {
    let update = req.body;
    let selectedId = Number(req.params.id);

    let index = lions.findIndex((lion => lion.id === selectedId));

    if (lions[index]) {
        lions[index] = update;
        res.json(lions);
    } else {
        res.send();
    }

    res.json(lions);
});

// DESTROY


app.listen(3000);
console.log('on port 3000');
