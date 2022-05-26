module.exports = (sequelize, dataTypes) => {
  const alias = "Movies";
  const columns = {
    title: dataTypes.STRING,
    rating: dataTypes.INTEGER,
    awards: dataTypes.INTEGER,
    length: dataTypes.INTEGER,
    release_date: dataTypes.DATE,
  };

  const config = {
    tableName: "movies",
    timestamps: false,
  };

  const Movies = sequelize.define(alias, columns, config);

  // relaciones
  Movies.associate = (models) => {
    Movies.belongsTo(models.Genres, {
      as: "genre",
      foreignKey: "genre_id",
    });
    Movies.belongsToMany(models.Actors, {
      as: "actors",
      through: "actor_movie",
      foreignKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });
  };

  return Movies;
};
