const express = require('express'),
      normal = require('./normal-router'),
      quantum = require('./quantum-router');

const app = express(),
      PORT = 3000

      // app.set('view engine', 'ejs');
      app.set('view engine', 'ejs')
      app.get('/', (req, res) => {
          res.render('index')
      });
      app.get('/normal', (req, res) => {
          res.render('normal', {normal: normal.calculateTime()})
      });
      app.get('/quantum', (req, res) => {
          res.render('quantum', {quantum: quantum.calculateTime()})
      })
      app.listen(PORT, '127.0.0.1', () => {
         console.log('http://127.0.0.1:3000 \n Click Ctrl + C for stop server' )
      });