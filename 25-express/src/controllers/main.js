module.exports = {
  home: (req, res) => {
    console.log("Validar: ", req.validar);
    console.log("Controlador");
    res.render("index");
  },
  admin: (req, res) => {
    res.send("Hola Admin:" + req.query.user);
  },
};
