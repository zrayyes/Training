const express = require('express');
const app = express();


app.get('/', (req,res)=>{
   res.send('<h1>Hello</h1>');
});

const server = app.listen(3000, ()=> {
    console.log('Server started on port 3000');
});