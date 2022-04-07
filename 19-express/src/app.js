const path = require("path");
const express = require("express");
const mainRouter = require("./routes/main-routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.use("/", mainRouter);
