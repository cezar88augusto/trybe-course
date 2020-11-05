const removeSNames = require('./function');

describe('removeSNames', () => {
    it('should remove all s name', () => {
        const names = ['Scott', 'Courtney', 'Steve']
        expect(removeSNames(names)).not.toContain('Scott');
        expect(removeSNames(names)).not.toContain('Steve');
    });
    it('should not remove other names', () => {
        const names = ['Scott', 'Courtney', 'Wes']
        expect(removeSNames(names)).toContain('Courtney');
        expect(removeSNames(names)).toContain('Wes');
    });
    //'Deve levar em conta'
    it('should account for case', () => {
        const names = ['Scott', 'Courtney', 'Wes', 'scott']
        expect(removeSNames(names)).not.toContain('Scott');
        expect(removeSNames(names)).not.toContain('scott');
    });
});