import { addition, multiplication } from "./math";

describe("Addition tests", () => {
    test('adding 1 + 2 should return 3', () => {

      expect(addition(1, 2)).toBe(3);

    });
    test('adding 3 + 5 should return 8', () => {

        expect(addition(3, 5)).toBe(8);

      });
      test('adding 4 + 4 should return 8', () => {

        expect(addition(4, 4)).toBe(8);

      });
   });


   describe("Multiplication tests", () => {
    test('multiplication of 1 and 2 should return 2', () => {

      expect(multiplication(1, 2)).toBe(2);

    });
    test('multiplication of 3 and 5 should return 15', () => {

        expect(multiplication(3, 5)).toBe(15);

      });
      test('multiplying 4 and 4 should return 16', () => {

        expect(multiplication(4, 4)).toBe(16);

      });
   })



