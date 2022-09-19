// create a house that has a default of 
// 5 windows and has a door that can open and close, 
// has a type, has a roofing, and
//  has a repair place that changes
//   windows and door to user input.

class House{
    isDoorOpen: boolean
    doorType: string
    windows: number
    roofing: string

    constructor(roofing:string = 'hipped', isDoorOpen:boolean = true, doorType:string = 'wooden', windows = 5  )  {
        this.isDoorOpen = isDoorOpen
        this.doorType = doorType
        this.windows = windows
         this.roofing = roofing
    }


    door(input: boolean): string {
        let  result:string
        if (input = true){
            this.isDoorOpen = true
         result = `your door is opened`

        }else if(input = false){
            this.isDoorOpen = false
            result = `your door is closed`
        }else{
            result = 'please enter a boolean'
        }
         return result
    }

    repair(door:string, window:number): string {
     this.doorType = door
     this.windows = window

     return `your house has a new ${this.doorType} door and a new ${this.windows} window`;
    }
}

class Building extends House {
type:string
    constructor(roofing:string, type:string ){
    super(roofing);
       
        this.type = type
    }
}


const myHouse = new House( 'flat', true, 'wooden', 16 )

const myBuilding = new Building('gable', 'duplex')

console.log(myHouse)
console.log(myBuilding)
export{
    myBuilding,
    myHouse
}