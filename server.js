var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/web')).listen(8080);