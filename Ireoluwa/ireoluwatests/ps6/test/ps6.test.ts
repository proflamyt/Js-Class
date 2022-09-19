import { myBuilding, myHouse } from "../problemSet6 - houseclass";

describe('Buildings',()=>{
    test('function of a house',()=>{
        expect(myHouse.door(true)).toBe("your door is opened")
    });

    test('function of a building',()=>{
        expect(myBuilding.repair('marble', 3)).toBe(`your house has a new marble door and a new 3 window`)
    });
})