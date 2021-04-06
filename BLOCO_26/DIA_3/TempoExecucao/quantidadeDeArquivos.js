/* Exercício 3 : Crie um script NodeJS que, utilizando apenas funções síncronas e módulos padrão do NodeJS, receba o nome de uma pasta e:
Escreva a quantidade de arquivos existentes dentro dela;
Escreva a soma do tamanho de todos os arquivos presentes nela;
Escreva no terminal o tempo total de execução do script.
Dica: utiliza a função readdirSync do módulo fs do Node.js.
Resolução :
Criar um novo pacote Node.js;
Criar uma pasta com alguns arquivos dentro (podem ser cópias dos arquivos utilizados nos exercícios anteriores);
Criar o script, que deve ficar assim: */

const fs = require('fs');

const scriptStart = Date.now();

const fileNames = fs.readdirSync('./folder');

console.log(`encontrados ${fileNames.length} arquivos`);

let fileSizeTotal = 0;

for (const fileName of fileNames) {
  const file = fs.readFileSync(`./folder/${fileName}`);
  fileSizeTotal += file.byteLength;
}

console.log(`tamanho total dos arquivos: ${fileSizeTotal} bytes`);

const scriptTime = Date.now() - scriptStart;
console.log(`script concluído em ${scriptTime} milissegundos`);