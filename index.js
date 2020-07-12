const express = require("express");

const homeRoute = require("./routes/home");

const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const connectDB = require("./config/db");

connectDB();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/home", homeRoute);

app.use((req, res, next) => {
    res.status(404).send("<div><h1>Page not found</h1><p>Kindly click on this <a href='/home'>link</a> to got to the home page</p></div>");
})

app.listen(5000);
