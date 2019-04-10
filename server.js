const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use(express.static('public'));

app.use('/', require('./routes/api.js'));


let port = process.env.PORT || 5500
app.listen(port, function() {
    console.log('Live: '+port)
});