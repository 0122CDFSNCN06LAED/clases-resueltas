module.exports = (sequelize, dataTypes) => {
  const alias = "Actors";
  const columns = {
    first_name: dataTypes.STRING,
    last_name: dataTypes.STRING,
    rating: dataTypes.FLOAT,
  };

  const config = {
    tableName: "actors",
    timestamps: false,
  };

  const Actors = sequelize.define(alias, columns, config);

  // relaciones
  Actors.associate = (models) => {
    Actors.belongsToMany(models.Movies, {
      as: "movies",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
    });

    Actors.belongsTo(models.Movies, {
      as: "favoriteMovie",
    });
  };

  return Actors;
};
