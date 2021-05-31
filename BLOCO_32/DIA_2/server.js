/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');
const connections = [];

const server = net.createServer((connection) => {
  connections.push(connections);

  connection.on('end', () => {
    connections.pop();
    console.log('Cliente desconectado');
  });

  connection.on('data', (data) => {
    console.log(data.toString());
    console.log(`O cliente disse: ${connections.length}`);
  });
  connection.write(`Cliente conectado: ${connections.length}`);
});


/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});