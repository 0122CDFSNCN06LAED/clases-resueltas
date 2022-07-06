const express = require("express");
const router = express.Router();
const actorsAPIController = require("../../controllers/api/actorsAPIController");

router.get("/", actorsAPIController.list);
router.get("/:id", actorsAPIController.detail);
router.get("/:id/movies", actorsAPIController.actorMovies);

router.post("/create", actorsAPIController.create);
router.put("/update/:id", actorsAPIController.update);
router.delete("/delete/:id", actorsAPIController.destroy);

module.exports = router;
