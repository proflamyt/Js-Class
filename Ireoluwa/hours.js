
var prompt = require('prompt')

prompt.start();

prompt.get(['hours', 'minutes'], function timeConverter(err, result){
    console.log(`${result.hours%12}:${result.minutes}`)
});
