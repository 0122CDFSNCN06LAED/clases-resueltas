const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
  fs.appendFileSync(
    path.join(__dirname, "../logs/user-logs.txt"),
    `El usuario ingresó a la ruta: '${req.path}' \n`
  );
  next();
};
