const products = [
  {
    id: 1,
    name: "Carpaccio fresco",
    description: "Entrada Carpaccio de salmón con cítricos",
    price: 65.5,
  },
  {
    id: 15,
    name: "Risotto de berenjena",
    description: "Risotto de berenjena y queso de cabra",
    price: 47.0,
  },
  {
    id: 250,
    name: "Mousse de arroz",
    description: "Mousse de arroz con leche y aroma de azahar",
    price: 27.5,
  },
  {
    id: 8,
    name: "Espárragos blancos",
    description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: 37.5,
  },
];

module.exports = {
  home: (req, res) => {
    res.render("index", {
      products: products,
    });
  },
  detail: (req, res) => {
    //MAGIA
  },
};
