const db = require("../../database/models");

const genresAPIController = {
    list: (req, res) => {
        db.Genre.findAll().then((genres) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: req.originalUrl,
                },
                data: genres,
            };
            res.json(respuesta);
        });
    },

    detail: (req, res) => {
        db.Genre.findByPk(req.params.id).then((genre) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: genre.length,
                    url: req.originalUrl,
                },
                data: genre,
            };
            res.json(respuesta);
        });
    },
    genreMovies: (req, res) => {
        db.Genre.findByPk(req.params.id, {
            include: ["movies"],
        }).then((genre) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: genre.length,
                    url: req.originalUrl,
                },
                data: genre,
            };
            res.json(respuesta);
        });
    },
};

module.exports = genresAPIController;
