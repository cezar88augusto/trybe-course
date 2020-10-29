const sum = require('./sum');

describe('Summation of two numbers', () => {
    it('Should return the expected values', () => {
        expect(sum(4, 6)).toBe(10);
        expect(sum(6, 4)).toBe(10);
    });
    it('Should return an error', () => {
        expect(() => sum(4, 'a')).toThrow();
    });
    it('Should be equal to zero', () => {
        expect(sum(0, 0)).toBe(0);
    });
})
