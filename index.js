const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use('/static',express.static(__dirname+'/dist'));
app.get('/', (req, res)=> {
    res.status(200).render('index');
})

app.listen(9877, ()=>{
    console.log('9877 kimserver gogo');
})