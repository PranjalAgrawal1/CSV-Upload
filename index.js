const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const fs = require('fs')
const expresslayouts = require('express-ejs-layouts');


app.use(express.static('./assets'));

app.use(expresslayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/', require('./router'));



app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Surver : ${port}`);
        return;
    }
    console.log(`Surver is running on port : ${port}`);
})