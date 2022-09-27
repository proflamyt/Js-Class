let http = require('http')
let tm = require('./mymodule')

http.createServer(
    
    function(req:any, res:any){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.write(`This is the current time: ${tm.getNewTime()}`);
        res.end();
    }
).listen(8000);