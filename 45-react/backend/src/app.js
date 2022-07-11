const express = require("express");
const path = require("path");
const app = express();

const cors = require("cors");

const apiMoviesRouter = require("./routes/api/movies");
const apiGenresRouter = require("./routes/api/genres");
const apiActorsRouter = require("./routes/api/actors");

app.use(cors("*"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Aquí creo la colección de mis recursos de movies (APIs)
app.use("/api/movies", apiMoviesRouter);
app.use("/api/actors", apiActorsRouter);
app.use("/api/genres", apiGenresRouter);

//Activando el servidor desde express
const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
