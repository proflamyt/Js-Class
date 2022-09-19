
function shifter(number:number):void{


for(let i:number = 0; i < 7; i++){
    console.log(`${'0'.repeat(i)}${(number).toString(2)}`);
    number >>= 1;
  
   
};
}
