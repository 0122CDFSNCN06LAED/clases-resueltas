const express = require("express");
const router = express.Router();
const moviesAPIController = require("../../controllers/api/moviesAPIController");

router.get("/", moviesAPIController.list);
router.get("/:id", moviesAPIController.detail);
router.get("/recommended/:rating", moviesAPIController.recommended);
router.post("/create", moviesAPIController.create);
router.put("/update/:id", moviesAPIController.update);
router.delete("/delete/:id", moviesAPIController.destroy);

module.exports = router;
