const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName : {
        type: String,
    },

    lastName : {
        type: String,
    },

    email : {
        type: String,
    },

    studentId : {
        type: String,
        unique: true,

    },

    password : {
        type: String,
    },

    phoneNumber : {
        type: String
    },

    address : {
        type: String
    },
});

module.exports = mongoose.model('Student', studentSchema);