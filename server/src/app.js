const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const server = express();

require('./db.js');

server.use(compression())

server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(morgan('dev'))
server.get('/test', (req, res) => {
    res.json({message: 'server on'})
})

module.exports = server;