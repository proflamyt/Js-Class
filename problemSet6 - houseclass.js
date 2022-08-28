// create a house that has a default of 
// 5 windows and has a door that can open and close, 
// has a type, has a roofing, and
//  has a repair place that changes
//   windows and door to user input.

class House{

    constructor(roofing = 'hipped', isDoorOpen = true, doorType = 'wooden', windows = 5  )  {
        this.isDoorOpen = isDoorOpen
        this.doorType = doorType
        this.windows = windows
         this.roofing = roofing
    }


    door(input) {
        if (input = 'open'){
            this.isDoorOpen = true

        }else if(input = 'closed'){
            this.isDoorOpen = false

        }
    console.log(`your door is ${input}`)
    }

    repair(door, window) {
     this.doorType = door
     this.windows = window

     console.log(`your house has a new ${this.doorType}
      door and a new ${this.windows} window`);
    }
}

class Building extends House {

    constructor(roofing, type ){
        super(roofing);
       
        this.type = type
    }
}


const myHouse = new House( 'flat', true, 'wooden', 16 )

const myBuilding = new Building('gable', 'duplex')

console.log(myHouse)
console.log(myBuilding)
