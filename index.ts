var express = require('express')
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser())


app.get('/hello', function(req:any, res:any){
    res.send(JSON.stringify({result:'Hello World'}))
})

app.post('/hello', function(req:any, res:any){
    console.log(req.body)
    res.send(JSON.stringify({result:"you just called a post request on /hello"}))
})

app.listen(8000);

//send username and email in the post request(using express ) and send an email to the person  (hey 'username' welcome to ---)