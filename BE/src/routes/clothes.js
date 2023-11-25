const express = require("express");
const {
    getClothes,
    createClothes,
    deleteClothes,
    updateClothes,
    getOneClothes,
    getFeatured,
} = require("../controller/clothesController.js");
const checkLogin = require("../middleware/checkLogin.js");

const router = express.Router();

// xem tat ca
router.get("/", getClothes);

//xem san pham yêu thich
router.get("/featured", getFeatured);

// xem mot
router.get("/find/:idClothes", getOneClothes);

//them
router.post("/", createClothes);

//xoa
router.delete("/:idClothes", deleteClothes);

//sua
router.put("/:idClothes", updateClothes);

module.exports = router;
