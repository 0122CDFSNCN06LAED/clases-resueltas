const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Genres.findAll().then((genres) => {
      res.render("genresList", {
        genres: genres,
      });
    });
  },
  detail: (req, res) => {
    db.Genres.findByPk(req.params.id).then((genre) => {
      res.render("genresDetail", {
        genre: genre,
      });
    });
  },
  add: (req, res) => {
    res.render("genresAdd");
  },
  create: (req, res) => {
    db.Genres.create(req.body).then(() => {
      res.redirect("/genres");
    });
  },
  edit: (req, res) => {
    db.Genres.findByPk(req.params.id).then((genre) => {
      res.render("genresEdit", {
        genre,
      });
    });
  },
  update: (req, res) => {
    db.Genres.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/genres");
    });
  },
  destroy: (req, res) => {
    db.Genres.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/genres");
    });
  },
};
