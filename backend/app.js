const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URI, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
.then(()=>console.log('database connected!'))
.catch(()=>console.log('Faild to connect with database!'))



module.exports = app;