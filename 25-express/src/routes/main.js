const express = require("express");
const mainController = require("../controllers/main");
const adminGuard = require("../middlewares/admin-guard");
const router = express.Router();

router.get("/", mainController.home);
router.get("/admin", adminGuard, mainController.admin);

module.exports = router;
