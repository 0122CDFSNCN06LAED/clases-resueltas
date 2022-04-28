const users = [
  {
    name: "Ada",
  },
  {
    name: "Tim",
  },
  {
    name: "Greta",
  },
  {
    name: "Vim",
  },
];

module.exports = (req, res, next) => {
  if (users.find((user) => user.name == req.query.user)) {
    next();
  } else {
    res.send("No tienes los privilegios para ingresar");
  }
};
