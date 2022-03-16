const fs = require("fs");
const path = require("path");

//Leer el archivo y guardarlo en una variable (string)

const textoDelArchivo = fs.readFileSync(
  path.join(__dirname, "tareas.json"),
  "utf-8"
);

//Convertir ese texto en formato json en algo manipulable por javascript
//Guardamos esa conversion en una variable llamada "tareas" (un array de objetos)
const tareas = JSON.parse(textoDelArchivo);

function listar() {
  //Recorrer el array de "tareas" e imprimir en pantalla
  // cada uno de los titulos y su estado
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    console.log("- " + tarea.titulo + " [" + tarea.estado + "]");
  }
}

module.exports = {
  listar,
};
