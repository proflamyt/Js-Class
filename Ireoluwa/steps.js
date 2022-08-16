var prompt = require('prompt')

prompt.start();


prompt.get(['steps'], function(err, result){
    try {
        let steps = result.steps.trim()
        if (isNaN(steps) || steps <= 0) throw "Enter a valid number";
        for(let i = 0 ; i <= steps; i++){
         console.log(`${' '.repeat(steps - i)}${'#'.repeat(i)}`)
        }
         
        
    } catch (error) {
        console.log(error)
    }
   
});

// prompt.get(['steps'], function(err, result){
//     if( isNaN(result.steps) || result.steps >= "" ){
//         console.log('Enter a valid NUMBER of steps')
//       }else if( result.steps >= 0) {
//         console.log(`Your ${result.steps} steps are below`)
//     for(let i = 0 ; i <= result.steps; i++){
//         console.log(`${' '.repeat(result.steps - i)}${'#'.repeat(i)}`)}
//        }else{
//            console.log('Number less than Zero')
//        }

//   }
//   );
 