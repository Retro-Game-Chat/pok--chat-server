var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/server', require('./routes/server'));
app.use('/api/user', require('./routes/user'));
app.use('/api/member', require('./routes/member'));

module.exports = app;
