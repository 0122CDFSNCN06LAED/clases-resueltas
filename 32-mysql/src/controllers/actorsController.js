const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Actors.findAll().then((actors) => {
      res.render("actorsList", {
        actors: actors,
      });
    });
  },
  detail: (req, res) => {
    db.Actors.findByPk(req.params.id).then((actor) => {
      res.render("actorsDetail", {
        actor: actor,
      });
    });
  },
};
