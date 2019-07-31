const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const expressHbs = require("express-handlebars");

const app = express();

//==================EJS
app.set("view engine", "ejs");
app.set("views", "views");


//==================HandleBart
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout"
//     // extname: "hbs"
//   })
// );
// app.set("view engine", "hbs");
// app.set("views", "views");

//==================PUG
// app.set("view engine", "pug");
// app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //provide grand access to public folder

app.use("/admin", adminData.routes);
app.use(shopRoutes);

//Page NOt Found
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" }); //PUG
  res.status(404).render("404", { pageTitle: "Page Not Found", layout: false }); //handlebars
});
app.listen(3000);
