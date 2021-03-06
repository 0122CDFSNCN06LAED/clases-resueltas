const express = require("express");
const path = require("path");
const userLogs = require("./middlewares/user-logs");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(userLogs);

const mainRouter = require("./routes/main");
app.use("/", mainRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor encendido: " + PORT);
});
