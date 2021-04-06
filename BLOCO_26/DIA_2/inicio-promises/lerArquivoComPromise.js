const { readFile }  = require('fs');
const nomeDoArquivo = 'msg.txt';

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
};

readFilePromise(nomeDoArquivo)
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
});

