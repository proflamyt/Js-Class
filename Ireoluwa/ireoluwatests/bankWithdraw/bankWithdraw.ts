
class Bank {
     accountBalance: number;
     name: string;
    constructor(name = '', accountBalance = 0){
        this.name = name
        this.accountBalance = accountBalance
    }

    
     withdraw(amount:number): number| string {
        let result
    if (amount > this.accountBalance || isNaN(amount) || amount < 0){
         result = 'invalid input'
    }else if (amount <= this.accountBalance){
    

            this.accountBalance -= amount;
           
          console.log(`you have sucessfully withdrawn ${amount} and new balance is ${this.accountBalance}`)
     
        result =this.accountBalance

        
    }
    return result
    }
}

const JidesAccount = new Bank('Jide', 1000)


 export {
    JidesAccount
 }



