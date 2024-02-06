const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/projects', (req, res) => {
    res.render('projects.ejs');
})

app.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})

// npm install express
// npm install nodemon
// npm install ejs