const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userName: { type: String, required: true},
    phone: { type: String, required: true},
    email: { 
        type: String,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: true
        },
    password: { type: String, required: true},
    roles: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user'],
    },
    status: { type: Boolean, default:false},
})

module.exports = mongoose.model('User', userSchema)