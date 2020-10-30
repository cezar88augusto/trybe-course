// A função test é síncrona. Porém, setTimeout é assíncrono.
//O jest lê a função toda e não esperada o setTimeout();

/* test("Não deveria passar!", () => {
    setTimeout(() => {
        expect(10).toBe(5);
        console.log('Deveria falhar!')
    }, 500);
});
 */
//Para corrigir isto, deve-se colocar o done!!!

/* test("Não deveria passar!", done => {
    setTimeout(() => {
        expect(10).toBe(5);
        console.log('Deveria falhar!')
        done();
    }, 500);
}); */

//Outro exemplo:
const SumNumbers = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }

  //Explicando: 
  test('Testando SumNumbers, soma 5 mais 10', done => {
      //primeiro parâmetro = 5
      //segundo parâmetro = 10
      // result valerá 15
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })