const TIPOS_DE_ESTADO = require("./estados");
const funciones = require("./funcionesDeTareas");

//Argument Vector
const accion = process.argv[2];

//Valores que pueden venir en accion
// 1) 'listar': ejecutar el codigo de arriba
// 2) undefined: imprimir "Atención - Tienes que pasar una acción."
// 3) no es valido - por defecto: "No entiendo qué quieres hacer."

switch (accion) {
  case "listar":
    {
      funciones.listar();
    }
    break;
  case "crear":
    {
      funciones.guardarTarea({
        estado: TIPOS_DE_ESTADO.PENDIENTE,
        titulo: process.argv[3],
      });
    }
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default: {
    console.log("No entiendo qué quieres hacer.");
  }
}
