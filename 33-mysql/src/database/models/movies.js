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

  return Movies;
};
