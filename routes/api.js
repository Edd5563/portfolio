const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let router = express.Router()
let Contacts = require('../models/contacts')

let urlencodedParser = bodyParser.urlencoded({extended:false});





router.get('/', function (req, res) {
    res.render('index')
});

router.get('/contact', function (req, res) {
    res.render('contact')
});


router.post('/contact', urlencodedParser, function (req, res, next) {
    Contacts.create(req.body).then(function(contact_saved){
        res.redirect('/');
    }).catch(next);
});




module.exports = router