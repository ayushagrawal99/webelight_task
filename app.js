const express = require('express');
const app = express();
const {port} = require('./config/config');

// Server 
app.listen(port, function(err){
    if(err){
        console.log("error in express setup",err);
        return;
    }
    console.log(`Express run fine at port : ${port}`);
})