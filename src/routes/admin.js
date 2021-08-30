const path = require("path");
const express = require("express");
//const rootDir = require("../util/dirPath");
const addProductController = require("../controllers/adminController");
const router = express.Router();

router.get("/add-product", addProductController.getAddProducts);

router.post("/add-product", addProductController.postAddProduct);

router.get("/products", addProductController.getProducts);

exports.routes = router;
