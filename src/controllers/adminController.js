const Product = require("../models/product");

const getAddProducts = (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("admin/add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formCss: true,
        productCss: true
    });
};

const getProducts = (req, res, next) => {
    res.render("admin/products", {
        pageTitle: "Products",
        path: "/admin/products",
        formCss: true,
        productCss: true,
        products: Product.fetchAll()
    });
};

const postAddProduct = (req, res, next) => {
    const p = new Product(req.body.title);
    p.save();
    //products.push({ title: req.body.title });
    res.redirect("/");
};

exports.getAddProducts = getAddProducts;
exports.postAddProduct = postAddProduct;
exports.getProducts = getProducts;
//exports.products = products;
