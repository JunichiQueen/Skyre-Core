const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var citizenSchema = new Schema({
    citizenId: int,
    forenames: String,
    surname: String,
    homeAddress: String,
    dateOfBirth: String,
    placeOfBirth: String,
    sex: String
});

module.exports = Citizen = mongoose.model('citizen', citizenSchema);