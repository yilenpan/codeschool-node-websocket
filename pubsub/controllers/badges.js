'use strict';

var _ = require('underscore');
var model = require('../models/badges');

/**
  Send badges to model to be saved
**/
//next is a callback.
//in app.js, next is badges.send
//badges = request body
//in model.save, if error, respond with error json
//else, continue with the next() callback

exports.save = function(req, res, next){
  var badges = _.clone(req.body);
  model.save(badges, function(err){
    if (err) {
      return res.json(503, {error: true});
    } else {
      next();
    }
  });

};

/**
  Send badges to pub/sub socket in model
**/
exports.send = function(){};