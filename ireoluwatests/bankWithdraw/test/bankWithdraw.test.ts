// import {JidesAccount} from "../bankWithdraw"
 const ola = require('../bankWithdraw')
describe('withdraw module',() => {
    test('withdraw 800 remains 200',()=>{
     expect(ola.JidesAccount.withdraw(800)).toBe(200)
    });
} );