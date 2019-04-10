const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let app = express();

//EJS setup
app.set('view engine', 'ejs');

//Error handler
app.use(function (err, req, res, next) {
    console.log(err.message);
    res.send({ error: err.message });
});

//Promises
mongoose.Promise = global.Promise;

//MongoDB setup.
//mongoose.connect('mongodb://localhost/portfolioDB', { useNewUrlParser: true })
mongoose.connect('mongodb://eddev:Yserbi1@ds237196.mlab.com:37196/heroku_t2vzbmrr', {useNewUrlParser: true})
mongoose.connection.once('once', function() {
    console.log('Connection establised')
}).on('error', function(error) {
    console.log('Connection Error: '+error);
});








//Public and Assets folder
app.use('/assets', express.static('assets'));
app.use(express.static('public'));

//Routes
app.use('/', require('./routes/api.js'));

//Ports
let port = process.env.PORT || 5500
app.listen(port, function() {
    console.log('Live: '+port)
});