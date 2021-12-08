const { Router } = require('express');
const Controller = require('../db');
const path = require('path');

const router = new Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
router.get('/home', (req, res) => {
    res.sendFile(path.resolve('public', 'home.html'))
})

router.get('/register', Controller.registrationGET);
router.post('/register', Controller.registrationPOST);
router.get('/login', Controller.loginGET)
router.post('/login', Controller.loginPOST)
router.get('/reset', Controller.resetGET)
router.post('/reset', Controller.resetPOST)
router.post('/logout', Controller.logout)

module.exports = router