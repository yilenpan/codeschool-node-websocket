'use strict';

var redis = require('redis');
var client = redis.createClient();

//throw the error, there are more eloquent ways of doing it
client.on('error', function(err){
  throw err;
});

module.exports = client;

