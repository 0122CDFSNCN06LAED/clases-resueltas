const db = require("../../database/models");

const actorsAPIController = {
    list: (req, res) => {
        db.Actor.findAll().then((actors) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: actors.length,
                    url: req.originalUrl,
                },
                data: actors,
            };
            res.json(respuesta);
        });
    },

    detail: (req, res) => {
        db.Actor.findByPk(req.params.id).then((actor) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: actor.length,
                    url: req.originalUrl,
                },
                data: actor,
            };
            res.json(respuesta);
        });
    },
    actorMovies: (req, res) => {
        db.Actor.findByPk(req.params.id, {
            include: ["movies"],
        }).then((actor) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: actor.length,
                    url: req.originalUrl,
                },
                data: actor,
            };
            res.json(respuesta);
        });
    },
    create: (req, res) => {
        db.Actor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
            favorite_movie_id: req.body.favorite_movie_id,
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
        let actorId = req.params.id;
        db.Actor.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating,
                favorite_movie_id: req.body.favorite_movie_id,
            },
            {
                where: { id: actorId },
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
        let actorId = req.params.id;
        db.Actor.destroy({ where: { id: actorId } })
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

module.exports = actorsAPIController;
