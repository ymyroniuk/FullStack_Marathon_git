'use strict'

const express = require('express');
const app = express();
// const fs = require('fs'); // Файлы
// const path = require('path'); // Пути
const File = require('./File');
const FileList = require('./FileList');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/js', express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    let file = new File(req.body.filename);
    file.write(req.body.content);
    res.redirect('/');
});

app.get('/list', (req, res) => {
    let fileList = new FileList();
    res.json({html: fileList.getHTMLList()});
});
app.get('/show', (req, res) => {
    console.log(req.query.file);
    let file = new File(req.query.file);
    res.json({content: file.read()});
});
app.get('/delete', (req, res) => {
    console.log(req.query.file);
    let file = new File(req.query.file);
    file.delete();
    res.redirect('/');
});

const PORT = process.env.PORT || 3000
app.listen(PORT,"127.0.0.1", () => {
    console.log('Open http://127.0.0.1:3000/ \n Click Ctrl+C for stop server');
});
