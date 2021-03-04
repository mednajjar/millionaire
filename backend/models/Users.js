const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userName: { type: String, required: true},
    phone: { type: String, required: true},
    email: { type: String, required: true},
    role: { type: String, required: true},
    status: { type: Number, required: true},
})

module.exports = mongoose.model('User', userSchema)