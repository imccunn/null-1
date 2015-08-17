'use strict';

// Neat wow
// neatgaem

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongoose.connect('mongodb://localhost/null_dev');

app.use(express.static(__dirname + '/build'));

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if (err) console.log(err);
  console.log('Server listening on port %d', port);
});
