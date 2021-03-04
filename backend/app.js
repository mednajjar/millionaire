const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const flash = require('connect-flash');

//connection to local database
mongoose.connect(process.env.URI, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
.then(()=>console.log('database connected!'))
.catch(()=>console.log('Faild to connect with database!'))
//************************** */

app.use(flash());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


module.exports = app;