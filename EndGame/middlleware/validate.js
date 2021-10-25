const User = require('../models/user');

module.exports = async function validate(data) {
    let user = new User()
    let status = true;
    let error = '';
    let result = await user.getAll({ email: data.email })
    if (result.length > 0) {
        status = false;
        error += 'Email already used, please change!';
    }
    let resultName = await user.getAll({ name: data.name })
    if (result.length > 0) {
        status = false;
        error += 'Name already used, please change!';
    }
    return {status: !(result.length + resultName.length), error: error};
}