const { body } = require("express-validator");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Hay que completar nombre")
    .bail()
    .isLength({
      min: 3,
    })
    .withMessage("Nombre tiene que tener al menos 3 caracteres"),
  body("email").isEmail().withMessage("Email debe ser un email válido"),
];
