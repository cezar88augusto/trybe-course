const uppercase = (str, callback) => {
    callback(str.toUpperCase());
}

describe('It tests if a string passed as parameter was converted to upper case', () =>{
    it('returns a string in upper case', ()=>{
        uppercase('c', (callback)=>{
            expect(callback).toBe('C');
        })
    })
})