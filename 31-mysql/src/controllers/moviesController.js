const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Movies.findAll().then((movies) => {
      res.render("moviesList", {
        movies: movies,
      });
    });
  },
};
