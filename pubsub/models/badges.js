"use strict";

var redis = require('../lib/redis');

// Save badges to database
// @param {Array} badges
// @param {Function} callback


//takes last badge from badges
//if err, pass the err to the callback with null as it's data
//if no err, pass the badges array back into the exports.save func
//recusion bitches.
//if badges.length == 0, pass the callback null and null.

exports.save = function(badges, callback) {
    if (!badges.length) {
      return callback(null, null);
    }
    var badge = badges.pop();
    redis.lpush('badges', JSON.stringify(badge), function(err){
      if (err) {
        return callback(err, null);
      } else {
        exports.save(badges, callback);
      }
    });
};