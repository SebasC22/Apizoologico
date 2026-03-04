'use strict';
const http = require('http');
const { text } = require('stream/consumers');
const server = http.createServer(function(req, res){
    res.writehead(200, {'content-type': 'text/plain'});
    res.end('Hola mundo')
})
server.listen(5000);