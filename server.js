const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    res.status(200);
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    res.status(200);
});

app.get('/singin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/singin.html'));
    res.status(200);
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));
    res.status(200);
});

app.listen(63334, () => {
    console.log('Server is running');
});