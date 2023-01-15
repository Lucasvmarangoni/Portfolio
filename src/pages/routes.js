const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    req.url = '/';
    res.sendFile(path.join(__dirname, 'build', 'Home.tsx'));
});

app.get('/portfolio', function (req, res) {
    req.url = '/portfolio';
    res.sendFile(path.join(__dirname, 'build', 'Portfolio.tsx'));
});

app.get('*', function (req, res) {
    req.url = '*';
    res.sendFile(path.join(__dirname, 'build', 'ErrorNotFound.tsx'));
});

app.listen(3000);