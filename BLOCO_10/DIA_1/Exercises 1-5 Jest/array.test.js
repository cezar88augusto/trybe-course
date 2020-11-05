const myRemove = require('./array');

describe('Returns an expected value of an array', () => {
    it('should return an array without the especified', () => {
        const fullArray = [1, 2, 3, 4, 5];
        expect(myRemove(fullArray, 3)).toEqual([1, 2, 4, 5]);
    });
    it('should check if return the corrected array', () => {
        expect(myRemove([1, 2, 3, 4], 2)).not.toEqual([1, 2, 3, 4]);
    });
    it('should throws a new error (string passed as the first parameter)', () => {
        expect(() => myRemove('só pra testar', 1)).toThrow();
    });
    it('should throws a new error (string passed as the second parameter)', () => {
        expect(() => myRemove(1, 'só pra testar')).toThrow();
    })
    it('should return the corrected array if the number passed as parameter is not finded inside the array', () => {
        expect(myRemove([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5]);
    })

});