/* Exercício 2 : Crie um script que realize as mesmas funcionalidades que o script do exercício 1, mas utilizando apenas funções assíncronas, de forma que os dois arquivos sejam lidos ao mesmo tempo.
Dica: utiliza a função readFile do módulo fs do Node.js.
Resolução :
Criar um novo pacote Node.js;
Criar os dois arquivos que serão lidos (você pode utilizar os mesmos arquivos de antes);
Criar o script, que deve ser mais ou menos assim:
 */
const fs = require('fs');

const startScript = Date.now();
let timeFile1;
let timeFile2;
let timeScript;

function printScriptEnd () {
  if (timeFile1 && timeFile2) {
    timeScript = Date.now() - startScript;
    console.log(`script concluído em ${timeScript} milissegundos`);
  }
}

const startFile1 = Date.now();

fs.readFile('./file1.txt', (err, file1) => {
  timeFile1 = Date.now() - startFile1;
  console.log(`file1.txt: lidos ${file1.byteLength} bytes em ${timeFile1} milissegundos`);
  printScriptEnd();
});

const startFile2 = Date.now();

fs.readFile('./file2.txt', (err, file2) => {
  timeFile2 = Date.now() - startFile2;
  console.log(`file2.txt: lidos ${file2.byteLength} bytes em ${timeFile2} milissegundos`);
  printScriptEnd();
});