
// create your own sort function
let myArray = [10, 1, 3, 2, 7, 8, 5, 11, 15]


const Sortedarr = []
const a = myArray.length


function sort(arr) {

  
    do {

       Sortedarr.push(myMin(arr))

         
      arr = arr.filter(
        number =>
         number > (myMin(arr)))
      
     
    } while(Sortedarr.length < a);


  

    return Sortedarr;
}

console.log(sort(myArray))







function myMin(arr) {
    return Math.min.apply(null, arr);
  }
  

function filter(number) {
    return number > (myMin(arr))
}  

