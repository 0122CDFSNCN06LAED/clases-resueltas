# Repaso

## Markdown

### Titulos

### Bullet lists

- item 1
- item 2
- item 3

### Código

```js
///Esto es un codigo
```

## Javascript

### Variables (var, let, const)

Es un espacio para almacenar informacion

- para utilizarla despues
- distintos tipos de datos
- distintas formas de declararlas

```js
let foo2 = "algo";
const foo3 = "algo";
```

### Tipos de datos

number 5 == 5 //true
string
boolean

object {} == {} //false
array

function

nan
undefined
null

```js
const name = "Pablo Baleztena";
const phone = "123456789";

name = "Pablo Alejandro Baleztena"; //ERROR

const listadoDeUsuarios = [
  {
    name: "Pablo Baleztena",
    phone: "123456789",
    saludar: function () {
      console.log("Hola");
    },
  },
  {
    name: "Pablo Baleztena",
    phone: "912345678",
  },
  {
    name: "Javi Herrera",
    phone: "56542132578",
  },
];

console.log(listadoDeUsuarios[0]);

listadoDeUsuarios[0].name = "Pablo Alejandro Baleztena"; //TODO BIEN
listadoDeUsuarios[0].direccion = "La plata";
console.log(listadoDeUsuarios[0]);
listadoDeUsuarios[0].saludar();
listadoDeUsuarios[0].saludar = function () {
  console.log("Chau");
};

listadoDeUsuarios = "Javier Herrera";
const unProfeReCopado = listadoDeUsuarios[2].name;
```

### Operadores

### Asignación

### Aritméticos

### Comparación

### Lógicos

### Funciones

- sirven para ejecutar codigo

```js
console.log(nombre1("5")); //50;

function nombre1(dato) {
  //El codigo de la funcion
  return dato * 10;
}

console.log(nombre2(5)); //Error

const nombre2 = function (dato) {
  return dato * 10;
};
```

### Condicionales

### Funciones de arrays

```js
const frutas = ["Banana", "Manzana", "Pera", "Pera"];
const indice = frutas.indexOf("Pera");
const indiceFinal = frutas.lastIndexOf("Pera");
```

- push, //Agrega el parametro al final del array
- pop, //Saca del final y devuelve ese elemento
- shift, //Saca el primero y lo devuelve
- unshift, //Agrega al principio el parametro
- indexOf, //Encuentra la primera posicion del parametro y la devuelve
- lastIndexOf,//Encuentra la ultima posicion del parametro y la devuelve
- includes,
- find
