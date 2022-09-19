var prompting = require('prompt')

prompting.start();

interface Result {
    steps : string
}


prompting.get(['steps'], (err: string , result:Result) => {
    try {
        let steps = Number(result.steps.trim())
        if (isNaN(steps) || steps <= 0) throw "Enter a valid number";
        for(let i = 0 ; i <= steps; i++){
         console.log(`${' '.repeat(steps - i)}${'#'.repeat(i)}`)
        }
         
        
    } catch (error) {
        console.log(error)
    }
   
});

