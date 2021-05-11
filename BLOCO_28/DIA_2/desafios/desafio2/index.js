const express = require("express");
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes.songRoutes);

app.listen(3001, () => {
	console.log("Ouvindo a porta 3001!");
});
