//get number of minutes from a particular query year, month,day if included
let http = require('http');
let time = require('./timeEdit');
let url = require('url');

interface date {
    year: string,
    month: string,
    day: string
}

http.createServer(
    function(req:any, res:any){
        res.writeHead(200, {'Content-type': 'application/json'});
        let q:date = url.parse(req.url, true).query;
      
        let ola = [q.year, q.month, q.day]
        res.write 
        (JSON.stringify({result :`There are ${time.convert(...ola)} minutes between your date and today ${Date()}`}))
        res.end();
    }
).listen(8000);
