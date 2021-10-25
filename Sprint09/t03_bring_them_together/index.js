const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connection = require('./model');
const session = require('express-session');

const app = express()

const router = express.Router();
const Controller = require('./db');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: 'Hello World',
    saveUninitialized: true,
    resave: false,
    user: {}
}));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
router.get('/register', Controller.registrationGET);
router.post('/register', Controller.registrationPOST);
router.get('/login', Controller.loginGET);
router.post('/login', Controller.loginPOST);
router.post('/logout', Controller.logout)
router.get('/reset', Controller.resetGET);
router.get('/reset', Controller.resetPOST);
router.get('/home', Controller.homeGET);
app.use('/', router)

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        if (connection) {
            console.log('Connection to database to was successful');
       }
        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}
start()