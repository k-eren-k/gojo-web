const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes');
app.use('/', router);
app.use('/commands', router);
app.use('/team', router);

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
