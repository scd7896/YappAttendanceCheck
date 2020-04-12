const express = require('express');
const path = require('path');
const app = express();
const prod = process.env.NODE_ENV === "production"
app.set('view engine', 'ejs');
app.use('/static',express.static(__dirname+'/dist'));
app.get('/', (req, res)=> {
    res.status(200).render('index');
})

app.listen( 80 , ()=>{
    console.log('80 kimserver gogo');
})