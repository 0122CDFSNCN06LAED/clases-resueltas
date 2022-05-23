const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Movies.findAll().then((movies) => {
      res.render("moviesList", {
        movies: movies,
      });
    });
  },
  new: (req, res) => {
    db.Movies.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("newestMovies", {
        movies: movies,
      });
    });
  },
  detail: (req, res) => {
    db.Movies.findByPk(req.params.id).then((movie) => {
      res.render("moviesDetail", {
        movie: movie,
      });
    });
  },
  recommended: (req, res) => {
    db.Movies.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("recommendedMovies", {
        movies: movies,
      });
    });
  },
};
