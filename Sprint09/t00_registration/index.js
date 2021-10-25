const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express()

const router = express.Router();
const Controller = require('./db');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
router.get('/register', Controller.registrationGET)
router.post('/register', Controller.registrationPOST)
router.get('/login', Controller.loginGET)
app.use('/', router)

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}
start()