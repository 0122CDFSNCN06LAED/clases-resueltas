const express = require("express");
const path = require("path");

//Mi Servidor
const app = express();

const PORT = 3030;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("El servidor se prendío en el puerto: " + PORT);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/lovelace", (req, res) => {
  res.sendFile(path.join(__dirname, "views/lovelace.html"));
});
