function calcularDivisao(num1, num2) {
    if(num2 == 0) throw Error('Não pode ser feita uma divisão por zero');

    const resultado = num1/num2;

    return resultado;
}

try {
  const resultado =  calcularDivisao(2,1);
    console.log("Resultado é:", resultado)
}catch(error){
    console.log("Erro: %s", error.message)
}