const express = require('express');
const compression = require("compression");
const cookieParser = require("cookie-parser");

const app = express();

require('./db.js');

app.use(compression())

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/test', (req, res) => {
    res.json({message: 'server on'})
})

module.exports = app;