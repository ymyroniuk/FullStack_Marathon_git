const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'KyrylLox',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

let sess;
app.get('/', (req, res) => {
    sess = req.session
    if (sess.password) {
        res.send(helpers(2, sess.hash))
    } else {
        res.send('/')
    }
})

app.post('/', (req, res) => {
    sess = req.session
    console.log(sess);
    sess.password = req.body.password
    sess.number = req.body.number
    sess.hash = bcrypt.hashSync(sess.password, +sess.number)
    res.redirect('/refresh')
})

app.get('/refresh', (req, res) => {
    sess = req.session
    if (sess.password) {
        res.send(helpers(2, sess.hash))
    }
})

app.post('/check', (req, res) => {
    sess = req.session
    sess.text = req.body.text
    if (sess.password) {
        if (bcrypt.compareSync(sess.text, sess.hash)) {
            sess.hash = true
            req.session.destroy((err) => {
                if (err) {
                   return console.log(err);
                }
                res.send(helpers(3))
            })
        } else {
            res.send(helpers(4, sess.hash))
        }
    } else {
        res.redirect('/')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
    })
    res.redirect('/')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server has been started on PORT ${PORT}`);
})




function helpers(type, hash) {
    let page2 = `
    <h1>Password</h1>
    <form action="/check" method="POST" >
    <p>Password saved at session.</p>
    <p>Hash is ${hash}</p>
    <p>Try to guess: <input type="text" name="text" placeholder="Password to session"><button type="submit">Check password</button></p>
    </form>
    <button onclick="location.href='/logout'">Clear</button>`

    let page3 = `
    <h1>Password</h1>
    <h2 style="color:green">Hacked!</h2>
    <form action="/" method="POST" >
    <p>Password not saved at session.</p>
    <p>Password for saving to session<input type="password" name="password" placeholder="Password to session"></p>
    <p>Salt for saving to session<input type="number" name="number" placeholder="Salt to session"></p>
    <button type="submit">Save</button>
    </form>`

    let page4 = `
    <h1>Password</h1>
    <h2 style="color:red">Access denied!</h2>
    <form action="/check" method="POST" >
    <p>Password saved at session.</p>
    <p>Hash is ${hash}</p>
    <p>Try to guess: <input type="text" name="text" placeholder="Password to session"><button type="submit">Check password</button></p>
    </form>
    <button onclick="location.href='/logout'">Clear</button>`

    if (type === 2) {
        return page2
    } else if (type === 3) {
        return page3
    } else if (type === 4) {
        return page4
    } 
}