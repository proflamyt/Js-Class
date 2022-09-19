var http = require('http');
var url = require('url');

http.createServer(function (req:any, res:any) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var q = url.parse(req.url, true).query;
  var txt = q.name + " " + q.age + '' + q.home;
  res.end(JSON.stringify({
    'message': txt
  }));
}).listen(8000);