const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Con Express");
});

app.listen(4004, () => {
  console.log("Servidor Funcionando");
});
