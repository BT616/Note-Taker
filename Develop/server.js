const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 3001;



//html pages 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// notes info 
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.post('/api/notes', (req, res) => {
    const newNote = {
        ...req.body,
        id: Math.floor(Math.random() * 1000)
    }
    notes.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) {
             console.log(err) 
            }
    })
    res.json(newNote)
})


//app.delete for deleting, like post or get 
app.delete('/api/notes/:id', (req,res) =>

{
})











app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () =>
    console.log(`app listening at http://localhost:${PORT}`))