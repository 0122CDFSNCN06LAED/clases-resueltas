const db = require("../database/models");

module.exports = {
  list: async (req, res) => {
    const movies = await db.Movies.findAll({
      include: [
        {
          association: "actors",
        },
        {
          association: "genre",
        },
      ],
    });

    res.render("moviesList", {
      movies: movies,
    });
  },
  new: async (req, res) => {
    const movies = await db.Movies.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    });

    res.render("newestMovies", {
      movies: movies,
    });
  },
  detail: async (req, res) => {
    try {
      const movie = await db.Movies.findByPk(req.params.id);
      res.render("moviesDetail", {
        movie: movie,
      });
    } catch (err) {
      console.error(err);
      res.redirect("/movies/not-found");
    }
  },
  recommended: async (req, res) => {
    const movies = await db.Movies.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    });
    res.render("recommendedMovies", {
      movies: movies,
    });
  },
  add: async (req, res) => {
    const [genres, actors] = await Promise.all([
      db.Genres.findAll(),
      db.Actors.findAll(),
    ]);

    res.render("moviesAdd", {
      genres: genres,
      actors: actors,
    });
  },
  create: async (req, res) => {
    await db.Movies.create(req.body);
    res.redirect("/movies");
  },

  edit: async (req, res) => {
    const [movie, genres] = await Promise.all([
      db.Movies.findByPk(req.params.id),
      db.Genres.findAll(),
    ]);
    res.render("moviesEdit", {
      movie,
      genres,
    });
  },

  update: async (req, res) => {
    await db.Movies.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/movies");
  },

  destroy: async (req, res) => {
    const movie = await db.Movies.findByPk(req.params.id);
    await movie.removeActors();
    await movie.destroy();
    res.redirect("/movies");
  },
};
