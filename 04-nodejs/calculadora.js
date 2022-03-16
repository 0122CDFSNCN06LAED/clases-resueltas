const sumar = require("./operaciones/sumar");

// console.log(sumar(1, 2));

function anterior(n) {
  return n - 1;
}
function triple(nB) {
  return nB * 3;
}

function anteriorDelTriple(nC) {
  return nC * triple - anterior;
}

console.log(anteriorDelTriple(2));
