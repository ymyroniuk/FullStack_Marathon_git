const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes/router');
const session = require('express-session');
const User = require('./models/user')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: 'Hello World',
    saveUninitialized: true,
    resave: false,
    user: {}
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/', routes)
app.use('/register', routes)
app.use('/login', routes)
app.use('/reset', routes)
app.use('/home', routes)

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        let user = new User()
        if (user.connect) {
            console.log('Connection was successful to database');
        } else {
            console.log('Error connection to database');
        }
        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}
start()