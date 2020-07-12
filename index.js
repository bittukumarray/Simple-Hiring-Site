const express = require("express");

const homeRoute = require("./routes/home");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/home", homeRoute);

app.use((req, res, next)=>{
    res.status(404).send("<h1>Page not found</h1>");
})

app.listen(5000);