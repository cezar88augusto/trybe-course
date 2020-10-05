let listaDePessoasAprovadas = [
    'cezar88augusto@gmail.com',
    'luisa.sampaio@gmail.com',
    'mcrm@hotmail.com'
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso!`);
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posição é a de ${posicao}`);
    console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
})