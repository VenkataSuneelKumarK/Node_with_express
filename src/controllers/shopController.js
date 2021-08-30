//const addProductController = require("./addProductController");
const Product = require("../models/product");
const getProducts = (req, res, next) => {
    console.log("shop.js", Product.fetchAll());
    //res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop/shop", {
        pageTitle: "Shop",
        path: "/",
        formCss: false,
        productCss: true,
        products: Product.fetchAll()
    });
};

const getOrders = (req, res, next) => {
    res.render("shop/orders", {
        pageTitle: "Orders",
        path: "/orders",
        formCss: false,
        productCss: true,
        orders: Product.fetchAll()
    });
};

const getCart = (req, res, next) => {
    res.render("shop/cart", {
        pageTitle: "Cart",
        path: "/cart",
        formCss: false,
        productCss: true,
        cart: Product.fetchAll()
    });
};

exports.getProducts = getProducts;
exports.getOrders = getOrders;
exports.getCart = getCart;
