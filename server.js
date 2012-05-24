/**
 * a simple chat-paint-room demo based on nodejs ，which means you can paint and chat with your chaters on realtime
 * @author hpf1908@gmail.com
 * @date 2011.05.07
 */
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
var express = require('express');
var fs=require('fs');
var path = require('path');
var url = require('url');
//var config = require('./config');
var app = module.exports = express.createServer();//form({ keepExtensions: true , uploadDir : 'public/files'}));
//var port = require('./config').startParams.port;

require('./boot').boot(app);
app.listen(port);

console.log('app started on port ' + app.address().port);
