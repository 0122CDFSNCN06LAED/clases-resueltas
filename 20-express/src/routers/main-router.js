const { Router } = require("express");
const mainController = require("../controllers/main-controller");
const mainRouter = Router();

mainRouter.get("/", mainController.home);
mainRouter.get("/detail/:id", mainController.detail);

module.exports = mainRouter;
