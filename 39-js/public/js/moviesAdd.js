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

  const inputValidations = [
    {
      inputName: "title",
      validations: [
        {
          validator: (value) => {
            return value.length == 0;
          },
          message: "el campo no puede estar vacío",
        },
      ],
    },
    {
      inputName: "rating",
      validations: [
        {
          validator: (value) => {
            return value.length == 0;
          },
          message: "el campo no puede estar vacío",
        },
        {
          validator: (value) => {
            return value < 0 || value > 10;
          },
          message: "el valor debe ser entre 0 y 10",
        },
      ],
    },
  ];

  form.addEventListener("submit", (event) => {
    const errors = [];

    for (const inputValidation of inputValidations) {
      const inputName = inputValidation.inputName;
      const input = form[inputName];
      const inputValue = input.value;
      const inputError = document.querySelector(`#${inputName}Error`);
      // vamos validando
      // si no hay contenido en elValor

      let error = false;

      for (const validation of inputValidation.validations) {
        if (validation.validator(inputValue)) {
          errors.push(inputName);
          input.classList.add("is-invalid");
          inputError.innerHTML = validation.message;
          error = true;
        }
      }

      if (!error) {
        input.classList.remove("is-invalid");
        inputError.innerHTML = "";
      }
    }

    // si hubo errores?
    if (errors.length > 0) {
      // frenar el envío <- especifico del submit
      event.preventDefault();

      console.log(errors);
    }
  });
};
