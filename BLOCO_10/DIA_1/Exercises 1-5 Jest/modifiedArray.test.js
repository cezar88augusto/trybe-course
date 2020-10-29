const myRemoveWithoutCopy = require('./modifiedArray');

describe('Returns expected values of a modified array', () => {
    it('should returns the expected array', () => {
        expect(myRemoveWithoutCopy([1, 2, 3], 2)).toEqual([1, 3]);
    });
    test('returns the correct array', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('should returns the expected array, even if the number passed as parameter is not contained in the array', () => {
        expect(myRemoveWithoutCopy([1, 2, 3], 4)).toEqual([1, 2, 3]);
    });
})