window.onload = function () {
  // registramos un evento de (teclado <- keypress), o formulario <- submit, blur
  // Qué validación es más importante
  //  **backend**
  // Validando Frontend
  // Mínimo Submit <- instancia antes de enviar al back,
  //  otra opcion: desabilitar el botón <- Desafio
  // Blur <- Cuando el usuario sale de un input
  // Ciertos inputs voy a querer que se validen con un evento o con otro.

  const form = document.querySelector("#movie-add-form");

  form.addEventListener("submit", (event) => {
    const errors = [];

    // Capturamos lo que escribió <-
    const titleInput = form["title"];
    const titleValue = titleInput.value;
    const titleError = document.querySelector("#titleError");
    // vamos validando
    // si no hay contenido en elValor
    if (titleValue.length == 0) {
      errors.push("title");
      titleInput.classList.add("is-invalid");
      titleError.innerHTML = "el campo no puede estar vacío";
    } else {
      titleInput.classList.remove("is-invalid");
      titleError.innerHTML = "";
    }

    const ratingInput = form["rating"];
    const ratingValue = ratingInput.value;
    const ratingError = document.querySelector("#ratingError");
    // vamos validando
    // si no hay contenido en elValor
    if (ratingValue.length == 0) {
      errors.push("rating");
      ratingInput.classList.add("is-invalid");
      ratingError.innerHTML = "el campo no puede estar vacío";
    } else if (ratingValue < 0 || ratingValue > 10) {
      errors.push("rating");
      ratingInput.classList.add("is-invalid");
      ratingError.innerHTML = "el valor debe ser entre 0 y 10";
    } else {
      ratingInput.classList.remove("is-invalid");
      ratingError.innerHTML = "";
    }

    // si hubo errores?
    if (errors.length > 0) {
      // frenar el envío <- especifico del submit
      event.preventDefault();

      console.log(errors);
    }
  });
};
