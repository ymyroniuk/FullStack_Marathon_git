const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

app.use(session({secret: 'china', saveUninitialized: true, resave: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



let sess;
app.get('/', (req, res) => {
    sess = req.session;
    if (sess.name) {
        return res.redirect('/admin');
    }
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/login', (req, res) => {
    let resultExp = 1;
    let resultPur = 1;
    sess = req.session;
    console.log(req.body)
    for (let key in req.body) {
        sess[key] = req.body[key];
        if (key.includes('pw_')) {
            sess.experience = resultExp++
        } else {
            sess.experience = resultExp - 1
        }
        if (key.includes('pub_')) {
            sess.purpose = resultPur++
        } else {
            sess.purpose = resultPur - 1
        }
    }
    res.redirect('/admin');
});
app.get('/admin', (req, res) => {
    sess = req.session;
    if (sess.name && sess.alias && sess.age && sess.text && sess.photo) {
        res.write(`
        <h1>Session for new</h1>
        <pre>
        name:${sess.name}
        alias:${sess.alias}
        age:${sess.age}
        description:${sess.text}
        photo:${sess.photo}
        experience:${sess.experience}
        level:${sess.volume}
        purpose:${sess.purpose}
        </pre>`);
        res.end('<button><a href=' + '/forget' + '>Forget</a></button>');
    } else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }
});

app.get('/forget', (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            }
            res.redirect('/');
        });

    });

const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`App Started on PORT ${PORT} \n Click Ctrl + C for stop server`)
    });