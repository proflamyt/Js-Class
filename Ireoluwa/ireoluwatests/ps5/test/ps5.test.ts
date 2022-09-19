import { sort,
    myArray,
    myMin,
    Sortedarr} from
 "../problemSet5 - sort"

describe('sorting an array',()=>{
test('sory my arr',()=>{
    expect(sort(myArray)).toMatchObject([1, 2, 3, 5, 7, 8, 10, 11, 14, 15, 17])
});



});