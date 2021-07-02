const app = require('express')();
const http = require('http').createServer(app);
// Configurar o servidor para aceitar o SOCKET IO
const cors = require('cors');

// Iniciar um servidor do tipo socket:
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // Quem vai acessar? Quem vai ter a permissão?
    method: ['GET', 'POST'] // Métodos permitidos para a ORIGIN
  }
});

app.use(cors());

// Quando alguém se conectar ao servidor:
io.on('connection', (socket) => {
  // Para saber se alguém se conhectou:
  console.log('Alguém se conectou.');
  // Quando dentro do SOCKET algum evento for executado
  socket.on('disconnect', () => {
    console.log('Alguém saiu');
  });
  // mensagem \/ - é o nome do emit do front-end!
  // O que é enviado em um, é recebido no outro e vice-versa!
  // o emit mandará para todos que estão conectados na rede!
  socket.on('mensagem', (msg) => {
    io.emit('serverMessage', { message: msg })
  });

  socket.emit('message', ('Seja bem vindo ao TrybeChat'))

  // Toda vez que alguém se conectar, as outras conexões receberão uma msg.
  // Obs: é enviado como objeto.
  socket.broadcast.emit('serverMessage', { message: "Tivemos uma nova conexão!!!" })

})


// Só para renderizar o html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ovuindo na porta 3000');
});