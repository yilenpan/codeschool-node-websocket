"use strict";

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

//use() is middleware
//when a request comes in, the middleware processes it
//before it gets passed onto the route.
//this checks to see request is a json
app.use(express.json());

//in a route, you can pass in controllers
//a request that hits '/' will first go to
//badges.save, then badges.send. You can pass
//a third anon function, but we're not going to do it
//you need to close the connection

app.post('/', badges.save, badges.send, function(req, res){
  res.send("done");
});

app.listen(8000);