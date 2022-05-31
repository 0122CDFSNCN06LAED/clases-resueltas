const express = require("express");
const methodOverride = require("method-override");
const dayjs = require("dayjs");
const path = require("path");

const indexRouter = require("./routes/index");

const moviesRoutes = require("./routes/moviesRoutes");
const genresRoutes = require("./routes/genresRoutes");
const actorsRoutes = require("./routes/actorsRoutes");
const app = express();

app.locals = {
  dayjs,
  appVersion: "1.0.0",
};

// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);

app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));
