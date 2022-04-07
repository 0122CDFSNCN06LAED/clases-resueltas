const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const router = Router();

///Declarar las rutas
router.get("/", mainController.home); //home
router.get("/about", mainController.about); //about

module.exports = router;
