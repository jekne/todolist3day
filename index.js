const express = require("express");
const app = express();
const PORT = 4000;
function onListen() {
  console.log(`Listening on ${PORT}`);
}
const User = require("./models").user;

app.use(express.json());

app.listen(PORT, onListen);
