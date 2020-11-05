const service = require('./jest FN');
//Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada. Solução:
test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

//Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
//Essa implementação deve ocorrer uma única vez. Faça os testes necessários. Solução:

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
});
