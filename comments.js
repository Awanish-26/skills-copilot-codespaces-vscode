// create web server
var express = require('express');
var app = express();

// create comments array
var comments = [];

// GET /comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// start web server
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});