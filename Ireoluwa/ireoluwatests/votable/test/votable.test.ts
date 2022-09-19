import {Votable} from "../votable"

describe('age Check', ()=>{
    test('Are you old enough to vote', ()=>{
        expect(Votable(17)).toBe('Too Young')
    });

    test('Are you old enough to vote', ()=>{
        expect(Votable(21)).toBe('Old Enough')
    });
})