const math = require('./MOCK');
jest.mock("./MOCK");

describe('Faça o mock da funcão subtrair e teste sua chamada', () => {
   test('chamada', () => {
      math.subtrair(1, 2);
      expect(math.subtrair).toHaveBeenCalled();
      expect(math.subtrair).toHaveBeenCalledTimes(1);
   });
})

describe('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10. Teste a chamada e o retorno.', () => {
   test('retorno', () => {
      math.multiplicar = jest.fn().mockReturnValue(10);
      expect(math.multiplicar()).toBe(10);
   });
})

describe('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
   afterEach(() => {
      math.somar = jest.fn().mockImplementationOnce((a, b) => a + b);
   });

   test('chamada', () => {
      math.somar();
      expect(math.somar).toHaveBeenCalled();
   });
   test('retorno', () => {
      expect(math.somar(2, 5)).toBe(7);
   });
   test('parametros', () => {
      math.somar(2, 5);
      expect(math.somar).toHaveBeenCalledWith(2, 5);
   });
})

describe('Faça o mock da função dividir e implemente um retorno padrão com o valor 15. Implemente também os seguintes valores para a primeira e segunda chamadas: 2 e 5. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
   test('retorno e quantidade de chamadas', () => {
      math.dividir = jest
         .fn().mockReturnValue(15)
         .mockReturnValueOnce(2)
         .mockReturnValueOnce(5);

      expect(math.dividir()).toBe(2);
      expect(math.dividir).toHaveBeenCalledTimes(1);
      expect(math.dividir()).toBe(5);
      expect(math.dividir).toHaveBeenCalledTimes(2);
      expect(math.dividir()).toBe(15);
      expect(math.dividir).toHaveBeenCalledTimes(3);
   });
})

describe('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor 20. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
   test('subtração', () => {

      math.subtrair = jest.spyOn(math, 'subtrair').mockImplementation((a, b) => a - b);

      math.subtrair.mockClear();
      math.subtrair(40, 20);

      expect(math.subtrair).toHaveBeenCalled();
      expect(math.subtrair(40, 20)).toBe(20);
      expect(math.subtrair).toHaveBeenCalledWith(40, 20);
   })
})