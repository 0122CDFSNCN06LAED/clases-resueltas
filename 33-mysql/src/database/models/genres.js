module.exports = (sequelize, dataTypes) => {
  const alias = "Genres";
  const columns = {
    name: dataTypes.STRING,
    ranking: dataTypes.INTEGER,
  };

  const config = {
    tableName: "genres",
    timestamps: false,
  };

  const Genres = sequelize.define(alias, columns, config);

  // relaciones

  return Genres;
};
