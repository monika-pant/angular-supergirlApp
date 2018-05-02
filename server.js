var http= require('http');
http.createServer(function(req,res){
res.write('Hello World');
console.log('server started at port 8080');
res.end();

}).listen(8080);