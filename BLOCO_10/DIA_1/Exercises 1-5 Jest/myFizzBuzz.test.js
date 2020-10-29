const myFizzBuzz = require('./myFizzBuzz');

describe('Check if the function myFizzBuzz is returning correct values', () => {
    it('checks if value is divisible by 3 and 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('checks if value is divisible by 3 and 5', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('checks if value is divisible by 3 and 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    it('checks if value is not divisible by 3 or 5', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('returns `false` if the argument is not a number', () => {
        expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
    });
})