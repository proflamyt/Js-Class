
let number = 64

for(let i = 0; i < 7; i++){
    console.log(`${'0'.repeat(i)}${(number).toString(2)}`);
    number >>= 1;
  
   
};
