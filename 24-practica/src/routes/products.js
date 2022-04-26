// ************ Require's ************
const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/products"),
  filename: (req, file, cb) => {
    const fileName =
      file.fieldname + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({
  storage,
});

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
// /products/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
// /products/
router.get("/create", productsController.create);
router.post("/", upload.single("image"), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id/", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;
