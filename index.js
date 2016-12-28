/* REQUIRES */
var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");

/* APP VARIABLES */
var app = express();
var db = require("./models"); // the "." tells require to look in our own file system

/* SET/USE STATEMENTS */
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "static")));

/* ROUTES */
// GET /
// view: views/welcome.ejs
// purpose: homepage, asks if user is new to site and directs them to clicker creation form
app.get("/", function(req, res) {
  res.render("site/welcome");
});

// GET /new
// view: views/everyone/new.ejs
// purpose: displays form for creating new clicker
app.get("/new", function(req, res) {
  res.render("everyone/new");
});

// POST /new
// view: none (redirects to /everyone after the clicker is created)
// purpose: creates a new clicker
app.post("/new", function(req, res) {
  console.log(req.body);
  db.clickers.create(req.body).then(function(clicker) {
    console.log(clicker);
    res.redirect("/everyone");
  });
});

// GET /everyone
// view: views/everyone/index.ejs
// purpose: displays all clickers and clicks (ranked by clicks, hopefully, or modular later)
app.get("/everyone", function(req, res) {
  db.clickers.findAll({ order: [
      ['clicks', 'DESC']
    ] }).then(function(clickers) {
    res.render("everyone/index", { clickers: clickers });
  });
});

// GET /everyone/:name
// view: views/everyone/show.ejs
// purpose: displays specific clicker by name and their clickety stats
app.get("/everyone/:name", function(req, res) {
  db.clickers.findAll({ where: { name: req.params.name } }).then(function(clicker) {
    console.log("name = ", clicker[0].dataValues)
    clicker = clicker[0].dataValues;
    res.render("everyone/show", { clicker: clicker });
  });
});

// PUT /everyone/:name
app.put("/everyone/:name", function(req, res) {
  var name = req.params.name;
  db.clickers.update(req.body,
    { where:
      { name: name }
    });
});

// GET /everyone/:name/sprint

// GET /everyone/:name/endurance


// HEY, LISTEN!
app.listen(3000);
