// dependencies
const express = require('express');
const path = require('path');
const app = express();

// port
const PORT = process.env.PORT || 5000;

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files from react app
app.use(express.static(path.join(__dirname, 'client/build')));

// define API routes
// test API route
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// send all other requests to react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log('App is listening on port ' + PORT);
});