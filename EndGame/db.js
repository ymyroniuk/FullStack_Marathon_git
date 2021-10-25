const path = require('path');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const validate = require('./middlleware/validate');
const accessToken = require('./tokens/accessToken');

class Controller {
    async registrationGET(req, res) {
        res.sendFile(path.join(__dirname, 'public', 'register.html'))
    }
    async registrationPOST(req, res) {
        try {
            let validation = await validate(req.body)
            console.log(validation);
            if (validation.status) {
                let user = new User();
                console.log(req.body);
                let hashedPassword = await bcrypt.hash(req.body.password, 10)
                if (req.body.password === req.body.confirm) {
                    user.save({
                        email: req.body.email,
                        password: hashedPassword,
                        name: req.body.name,
                    });
                    return res.redirect('/login')
                } else {
                    res.json({message: 'Password does not coincide with confirm password'})
                }
            } else {
                res.redirect('/')
            }
        } catch (err) {
            console.log(err);
        }
    }
    async loginGET(req, res) {
        try {
            res.sendFile(path.join(__dirname, 'public', 'login.html'))
        } catch (err) {
            console.log(err);
        }
    }
    async loginPOST(req, res) {
        try {
            let sess = req.session
            if (sess.user) {
                res.redirect('/home')
            } else {
                const user = new User()
                let result = await user.getAll({email: req.body.email});
                if (result.length > 0 && await bcrypt.compare(req.body.password, result[0].password)) {
                    sess.user = result[0];
                    const jwtToken = accessToken(result[0].id)
                    console.log(jwtToken);
                    if (err instanceof jwt.TokenExpiredError) {
                         res.status(401).json({message: 'Token expired'})
                    } else if (err instanceof jwt.JsonWebTokenError) {
                      return res.status(401).json({ message: 'Invalid token!' })
                    }
                    return res.redirect('/home')
                } else {
                    res.send('Password and login not valid, please change it!')
                }
            }
        } catch (err) {
            console.log(err);
        }      
    }
    async logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return console.log(err);
            } else {
                res.redirect('/');
            }
        })
    }
    async resetGET(req, res) {
        res.sendFile(path.join(__dirname, 'public', 'reset.html'))
    }
    async resetPOST(req, res) {
        try {
                const email = req.body.email
                console.log(email);
                const user = new User()
                const candidate = await user.findUser(email)
                console.log(candidate);
                if (candidate) {
                    res.redirect('/login')   
                } else {
                    res.redirect('/reset')
                }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new Controller()