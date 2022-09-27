const http = require('http')
const fs = require('fs')
const url = require('url')
interface Info {
    name : string
    place : string
}
http.createServer(
    
 function(req:any, res:any){

    var p = url.parse(req.url, true);
    let q:Info = url.parse(req.url, true).query;
    if (q.name == undefined){
      
       
    var filename = "." + p.pathname;
    fs.readFile(filename, function(err:any, data:any) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'application/json'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({
        result: data.toString('utf8')
      })
      );
      return res.end();
    });
     
    }else{

        res.writeHead(200, {'Content-type': 'application/json'});
       
        fs.appendFile('enterInfo.txt', `
        ${q.name} from ${q.place}`,function (err:any) {
            if (err) throw err;
            console.log('Saved!');
          });
          
          res.write(JSON.stringify({result:'info has been saved'}))
          return res.end();
}}
).listen(8000);
