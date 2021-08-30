//const path = require("path");
const express = require("express");
//const rootDir = require("../util/dirPath");
const shopController = require("../controllers/shopController");

const router = express.Router();

router.get("/", shopController.getProducts);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

module.exports = router;
