const { Router, urlencoded } = require("express");
const mainController = require("../controllers/main-controller");
const homeValidation = require("../validations/home-validation");
const router = Router();

const urlEncoded = urlencoded({
  extended: false,
});

router.get("/", mainController.home);
router.post("/", urlEncoded, homeValidation, mainController.homeForm);

module.exports = router;
