const notFound = (req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, "src", "views", "404.html"));
    res.status(404).render("404", {
        pageTitle: "Page not found",
        path: "404",
        formCss: false,
        productCss: false
    });
};
exports.notFound = notFound;
