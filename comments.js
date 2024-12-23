// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Run the server by typing: node comments.js
