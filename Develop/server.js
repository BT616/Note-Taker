const express = require('express');
const fs =require('fs');
const dbData = require('./db/db.json');
const path = require('path');

const app= express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

app.get('/db.json',(req,res)=> res.json(dbData));


//html pages 

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes',(req,res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


// notes info 











app.listen(PORT,()=>
console.log(`app listening at http://localhost:${PORT}`))