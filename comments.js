// create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');
var Comment = require('./models/comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      return res.send(err);
    }
    res.json(comments);
  });
});
