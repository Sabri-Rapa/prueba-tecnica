const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const routes = require('./routes/index')
require('./db.js');
const server = express();

server.name = 'API';
server.use(compression())

server.use(express.urlencoded({ extended: true }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan('dev'))
server.get('/test', (req, res) => {
    res.json({message: 'server on'})
})


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

server.use('/api', routes)
module.exports = server;