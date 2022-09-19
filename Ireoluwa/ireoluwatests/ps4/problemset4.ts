var prompting = require('prompt');

prompting.start();

interface Result {
    cashInHand:string,
     tlCostOfGoods:string
}
prompting.get(['cashInHand', 'tlCostOfGoods'], (err:string , result:Result) => {
const nigCurrDenom: number[] = [1000, 500, 200, 100, 50, 20, 10, 5]
try {
let cash:number = Number(result.cashInHand.trim())
let cost:number = Number(result.tlCostOfGoods.trim())
if (cash === cost ||  cost > cash) throw "You have no change. Thanks for shopping with us"
let change: number = cash - cost;

if (isNaN(change) || cash < 0 || cost < 0) throw 'Error in calculation. check your input.';

let changes : number[] = [];

while (change != 0){
    nigCurrDenom.forEach(fola)
};
function fola (value:number): void{
    if (change >= value){
        change -= value;
        changes.push(value);
    }
};
console.log(changes)
}catch (error){
    console.log(error)
}
});
