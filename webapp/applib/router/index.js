'use strict';
var http = require('http')

var router = function(app) {
    /* main index file */
    app.get('/', function(req, res){
        res.sendFile('public/index.html');
    });

    //var funed_env = process.env.FUNED_ENV;
    var funed_env = 'dev'; //TODO change it to permanent solution
    var host, port;
    if (funed_env === 'dev') {
        host = 'localhost';
        port = 8000;
    } else if (funed_env === 'test') {
        host = '54.152.232.28';
        port = 80;
    } else if (funed_env === 'prod') {
        host = 'localhost';
        port = 80;
    }

    var options = {
        host: host,
        port: port,
    };

    app.get('/api', function(req, res){
    });

};

module.exports = router
