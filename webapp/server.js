'use strict';

var app = require('./app');

/* HTTP Server */
var http = require('http').Server(app);
/* another option */
// var http = require('http').createServer(app);

http.listen(3000, function(){
	console.log('Express HTTP Server listening on port :: 3000');
});
