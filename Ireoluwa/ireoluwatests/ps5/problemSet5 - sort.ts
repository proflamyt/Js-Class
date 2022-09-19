
// create your own sort function
let myArray = [17, 14, 10, 1, 3, 2, 7, 8, 5, 11, 15]


const Sortedarr: number[] = []
const a = myArray.length


function sort(arr: number[]) {

  
    do {
      let val = myMin(arr)

      
       Sortedarr.push(val)

         
      arr = arr.filter(
        number =>
         number > val )
      
     
    } while(Sortedarr.length < a);


  

    return Sortedarr;
}

// console.log(sort(myArray))







function myMin(arr:number[]) {
    return Math.min.apply(null, arr);
  }
  
export{
  sort,
  myArray,
  myMin,
  Sortedarr
}
