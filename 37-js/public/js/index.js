//Query selector me trae un solo elemento
const elementMain = document.querySelector("main.container");
const elementH2 = document.querySelector("h2.subtitulo");
const elementA = document.querySelector("a");
const elementPList = document.querySelectorAll("p");

let nombre = prompt("Ingrese su nombre");

if (!nombre) {
  nombre = "Invitad@";
}

elementH2.innerHTML = "Bienvenid@ " + nombre;

elementH2.style.textTransform = "uppercase"; //?????

elementA.style.color = "#E51B3E";

const backgroundConfirmed = confirm(
  "Desea colocar un fondo de pantalla (hint: no, no quiere)"
);

if (backgroundConfirmed) {
  document.querySelector("body").classList.add("fondo");
}

elementPList.forEach((pElement, index) => {
  //Si el modulo de 2 da 0
  if ((index + 1) % 2 == 0) {
    pElement.classList.add("destacadoPar");
  } else {
    pElement.classList.add("destacadoImpar");
  }
});

elementMain.style.display = "block";
