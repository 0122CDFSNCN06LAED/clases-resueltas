const fs = require("fs");
const path = require("path");

const RUTA_TAREAS_JSON = path.join(__dirname, "tareas.json");

function listar() {
  //Recorrer el array de "tareas" e imprimir en pantalla
  // cada uno de los titulos y su estado
  const tareas = leerJSON();

  tareas.forEach((tarea, i) => {
    console.log(`[${i}] ${tarea.titulo} [${tarea.estado}]`);
  });
}

function guardarTarea(tarea) {
  const tareas = leerJSON();

  tareas.push(tarea);

  escribirJSON(tareas);
}

module.exports = {
  listar,
  guardarTarea,
};

function leerJSON() {
  //Leer el archivo y guardarlo en una variable (string)
  const textoDelArchivo = fs.readFileSync(RUTA_TAREAS_JSON, "utf-8");

  //Convertir ese texto en formato json en algo manipulable por javascript
  const tareas = JSON.parse(textoDelArchivo);

  return tareas;
}

function escribirJSON(todasMisTareas) {
  //Convertir ese array de tareas a un string de JSON
  // Guardarlo en una variable
  // Sobre-Escribir el archivo original
  // Con ese nuevo string
  const tareasEnFormatoJSON = JSON.stringify(todasMisTareas);
  fs.writeFileSync(RUTA_TAREAS_JSON, tareasEnFormatoJSON);
}
