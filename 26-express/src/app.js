const path = require("path");
const express = require("express");
const session = require("express-session");

const mainRouter = require("./routers/main-router");

const app = express();

app.use(
  session({
    secret: "Los gatitos son lo mejor",
    resave: true,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
  console.log("Se prendió el server");
});

app.use(mainRouter);
