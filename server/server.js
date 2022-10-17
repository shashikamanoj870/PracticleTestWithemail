const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

//imports route
const postRoutes = require('./routes/posts');

// app middleware
app.use(bodyParser.json());
app.use(require("cors")());

app.use(postRoutes);

const PORT = 8000;
const DB_URL ='mongodb+srv://shashikamanoj870:kTrNxoZOgPZH00eW@mycluster.i0figk8.mongodb.net/TestDB1?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>console.log('DB connection error',err));

app.listen(PORT,()=>{
    console.log(`app is runing on ${PORT}`)
});

