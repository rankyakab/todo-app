//require express
var express = require('express');
//require controller/todoControler.js
var todoController = require('./controller/todoController.js');
//var mongoose = require("mongoose");
var app= express();
//set templating engine
app.set('view engine', 'ejs');
//define static route
app.use(express.static('./public'));

//call the todoController
todoController(app);
//listen to  port 3000
app.listen(3000);
console.log("app listening to port 3000");
