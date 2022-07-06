const db = require("../../database/models");

const moviesAPIController = {
    list: (req, res) => {
        db.Movie.findAll({
            include: ["genre"],
        }).then((movies) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: movies.length,
                    url: req.originalUrl,
                },
                data: movies,
            };
            res.json(respuesta);
        });
    },

    detail: (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: ["genre"],
        }).then((movie) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: movie.length,
                    url: req.originalUrl,
                },
                data: movie,
            };
            res.json(respuesta);
        });
    },
    recommended: (req, res) => {
        db.Movie.findAll({
            include: ["genre"],
            where: {
                rating: { [db.Sequelize.Op.gte]: req.params.rating },
            },
            order: [["rating", "DESC"]],
        })
            .then((movies) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: req.originalUrl,
                    },
                    data: movies,
                };
                res.json(respuesta);
            })
            .catch((error) => console.log(error));
    },
    create: (req, res) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
        })
            .then((confirm) => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: req.originalUrl,
                        },
                        data: confirm,
                    };
                } else {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: req.originalUrl,
                        },
                        data: confirm,
                    };
                }
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },
    update: (req, res) => {
        let movieId = req.params.id;
        db.Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
            },
            {
                where: { id: movieId },
            }
        )
            .then((confirm) => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: req.originalUrl,
                        },
                        data: confirm,
                    };
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: req.originalUrl,
                        },
                        data: confirm,
                    };
                }
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },
    destroy: (req, res) => {
        let movieId = req.params.id;
        db.Movie.destroy({ where: { id: movieId } })
            .then((confirm) => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: req.originalUrl,
                        },
                        data: confirm,
                    };
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: req.originalUrl,
                        },
                        data: confirm,
                    };
                }
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },
};

module.exports = moviesAPIController;
