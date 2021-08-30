const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const paths = require("./src/util/dirPath");

const notFoundController = require("./src/controllers/404Controller");
const app = express();

app.set("view engine", "ejs");
app.set("views", paths.getDirPath("views"));

const adminData = require("./src/routes/admin");
const shopRoutes = require("./src/routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use(notFoundController.notFound);

app.listen(4000, () => {
    console.log("Listening to the port 4000");
});
