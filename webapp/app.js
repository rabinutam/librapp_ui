'use strict';

/* node powered UI app */

var express = require('express');
var app = express();
//app.directory = __dirname; //not sure if this needs to be set


/* Static Content */
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

/* router */
require('./applib/router/index')(app);

module.exports = app;
