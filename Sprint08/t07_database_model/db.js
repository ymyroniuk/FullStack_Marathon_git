const express = require('express');
const Hero = require('./models/hero');

const app = express();

app.get('/', async (req, res) => {
    res.send(getHero())
});

app.get('/find', async (req, res) => {
    const hero = new Hero();
    res.json((await hero.find(1)).data)
});
app.get('/delete', async (req, res) => {
    const hero = new Hero()
    res.json((await hero.find(12)).delete())
});
app.get('/save', async (req, res) => { 
    const hero = new Hero()
    res.json(await hero.save({ name: 'Artem', description: 'Lox', race: 'human', class_role: 'tankman' }));
});
app.get('/all', async (req, res) => {
    const hero = new Hero()
    res.json((await hero.getAll()).data);
});


function getHero() {
    let result =
    `
    <div style="text-align: center;">
    <a style="margin:5px;" href="/find">find Heroes</a>
    <a style="margin:5px;" href="/delete">delete Heroes</a>
    <a style="margin:5px;" href="/save">save Heroes</a>
    <a style="margin:5px;" href="/all">getAll Heroes</a>
    </div>
    `
    return result
}

const PORT = process.env.PORT || 3000;

async function start() {
    app.listen(PORT, () => {
        console.log(`Server has been started on PORT ${PORT}`);
    })
}
start()