const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema ({
    name: String,
    company: String,
    email: String,
    message: String
});

const Contacts = mongoose.model('contacts', ContactSchema);
module.exports = Contacts