// For partials we require hbs
const hbs = require("hbs");
const path = require("path");
const express = require("express");
const app = express();

// Public Static Path
// console.log(path.join(__dirname, "../public"));
const static_path = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const template_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

// set the view engine
app.set("view engine", "hbs");
app.set("views", template_Path);

// Registered partials using hbs
hbs.registerPartials(partials_Path);

app.use(express.static(static_path));

// app.get("/", (req, res) => {
//   res.send("welcome to talha page");
// });

// to render index page using view engine
app.get("/", (req, res) => {
  res.render("index.hbs");
});

// app.get("/about", (req, res) => {
//   res.send("welcome to about page");
// });

// to render about page using view engine
app.get("/about", (req, res) => {
  res.render("about.hbs");
});

// app.get("/weather", (req, res) => {
//   res.send("welcome to weather page");
// });

// to render weather page using view engine
app.get("/weather", (req, res) => {
  res.render("weather.hbs");
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMsg: "Oops! Page not found",
  });
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
