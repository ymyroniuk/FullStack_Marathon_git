const express = require('express');
const mysql = require('mysql2');
const config = require('./config.json');

const app = express();

const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password,
});

module.exports = connection.connect((err) => {
    if (err) {
        return console.log('Error with connecting to database!!!');
    } else {
        console.log('Connection to database to was successful');
    }
})

app.get('/', (req, res) => {
    res.send('Hello NodeJS and MySQL')
})

const PORT = process.env.PORT || 3000;

function start() {
    app.listen(PORT, () => {
        console.log(`Server has been started on PORT ${PORT}`);
    })
}
start()