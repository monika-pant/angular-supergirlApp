var http= require('http');
var express = require('express');
var app = express();
var path = require('path');

// var server=app.createServer(function(req,res){
// // console.log('server started at port 8080');
// res.end();
// })
// server.listen(8080,function(err){
//     if(err){
//         return console.log('something bad happened', err)
//     }
//     console.log('server is listening on port 8080');
    
// });
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/peerConnection.html'));
});
app.listen(8080);

