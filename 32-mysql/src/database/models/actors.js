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

  return Actors;
};
