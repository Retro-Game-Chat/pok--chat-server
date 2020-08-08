var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

var app = express();
var corsOpt = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200
};

app.use(cors(corsOpt))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/server', require('./routes/server'));
app.use('/api/user', require('./routes/user'));
app.use('/api/member', require('./routes/member'));

module.exports = app;
