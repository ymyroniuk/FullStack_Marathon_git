const jwt = require('jsonwebtoken');
const { secret } = require('../middlleware/config');

module.exports = (id) => {
    const payload = { id }
    return jwt.sign(payload, secret, { expiresIn: '3m'})
}