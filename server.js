const express = require('express');
const path = require('path');
const { Pool, Client} = require('pg');
const bodyParser  = require('body-parser');
const app = express();

let pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'DB_Members1',
    password: 'root',
    port: 5432
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static( __dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname + '/index.html'));
    res.status(200);
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join( __dirname + '/index.html'));
    res.status(200);
});

app.get('/singin.html', (req, res) => {
    res.sendFile(path.join( __dirname + '/singin.html'));
    res.status(200);
});

app.post('/login.html', (req, res) => {
    res.sendFile(path.join( __dirname + '/login.html'));
    res.status(200);

    let name = req.body.name;
    let pseudo = req.body.pseudo;
    let email = req.body.email;
    let password = req.body.password;

    let sqlInsert = `INSERT INTO members(user_name, user_pseudo, user_email, user_password) VALUES('${name}', '${pseudo}', '${email}', '${password}') RETURNING *`;

    pool.query(sqlInsert, (err, res) => {
        console.log(err, res);
    });

    pool.query(`SELECT * FROM members WHERE user_name = 'user_name'`, (err, res) => {
        console.log(err, res);
    });
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join( __dirname + '/login.html'));
    res.status(200);
});

app.listen(63334, () => {
    console.log('Server is running');
});