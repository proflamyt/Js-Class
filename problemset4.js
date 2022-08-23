var prompt = require('prompt');

prompt.start();

prompt.get(['cashInHand', 'tlCostOfGoods'], (err, result) => {
const nigCurrDenom = [1000, 500, 200, 100, 50, 20, 10, 5]
try {
let cash = Number(result.cashInHand.trim())
let cost = Number(result.tlCostOfGoods.trim())
if (cash === cost ||  cost > cash) throw "You have no change. Thanks for shopping with us"
let change = cash - cost;

if (isNaN(change) || cash < 0 || cost < 0) throw 'Error in calculation. check your input.';

let changes = [];

while (change != 0){
    nigCurrDenom.forEach(fola)
};
function fola (value){
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
