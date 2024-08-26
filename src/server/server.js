const path = require('path');
const express = require('express');
const app = express();
const cors=require('cors');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

const port = 7000;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;
