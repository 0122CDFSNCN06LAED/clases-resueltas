const dayjs = require("dayjs");

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
    db.Movies.findByPk(req.params.id)
      .then((movie) => {
        res.render("moviesDetail", {
          movie: movie,
        });
      })
      .catch(() => {
        res.redirect("/movies/not-found");
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
  add: (req, res) => {
    res.render("moviesAdd");
  },
  create: (req, res) => {
    db.Movies.create(req.body).then((movie) => {
      res.redirect("/movies");
      // res.redirect("/movies/detail/" + movie.id);
    });
  },

  edit: (req, res) => {
    db.Movies.findByPk(req.params.id).then((movie) => {
      res.render("moviesEdit", {
        movie,
        dayjs,
      });
    });
  },

  update: (req, res) => {
    // db.Movies.findByPk(req.params.id).then((movie) => {
    // const previousImage = movie.img;
    db.Movies.update(
      {
        ...req.body,
        // img: req.file ? req.file.filename : previousImage,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((movie) => {
      res.redirect("/movies");
      // res.redirect("/movies/detail/" + movie.id);
    });
    // });
  },

  destroy: (req, res) => {
    db.Movies.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/movies");
    });
  },
};
