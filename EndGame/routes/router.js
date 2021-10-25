const { Router } = require('express');
const Controller = require('../db');
const path = require('path');
const { check } = require('express-validator');

const router = new Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
router.get('/home', (req, res) => {
    res.sendFile(path.resolve('public', 'home.html'))
})

router.get('/register', Controller.registrationGET);
router.post('/register', [
    check('username', 'User name cannot empty').notEmpty(),
    check('password', 'Password must be have more 4 and smaller 15 symbols').isLength({min: 4, max: 15})
], Controller.registrationPOST);
router.get('/login', Controller.loginGET)
router.post('/login', Controller.loginPOST)
router.get('/reset', Controller.resetGET)
router.post('/reset', Controller.resetPOST)
router.post('/logout', Controller.logout)

module.exports = router