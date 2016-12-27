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

// GET /new
// have a

// GET /everyone

// GET /everyone/:name

// GET /everyone/:name/sprint

// GET /everyone/:name/endurance
