const express = require('express');
const cookieSession = require('cookie-session');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    name: 'session',
    keys: ['name1', 'name2'],
    maxAge: 6000,
}));

app.get('/', (req, res) => {
    req.session.views = (req.session.views || 0) + 1
    res.end(
    `<h1>Cookie counter</h1>
    <p>This page was loaded ${req.session.views} time(s) in last minute</p>`)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server has been started on PORT ${PORT}`);
})
