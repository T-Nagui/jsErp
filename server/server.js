/**
 * Created by NAGUI on 06/03/2016.
 */
var express=require('express');
var app=express();
var path = require('path');
var logger = require('morgan');
/*
app.get('/', function (req,res) {
   res.send("serv run");
});*/
console.log(path.join(__dirname, '../public'));
app.use('/',express.static(path.join(__dirname, '../public')));
app.use('/produtcs',express.static(path.join(__dirname, '../public/produtcs.html')));

app.get('/produtcs', function (req, res) {
    console.log('I received a GET request');
    var json_data = {"name":"amita","pass":"12345"};
    res.json(json_data);
});

app.listen(3000);
console.log('server running on port 3000');