const express = require("express");
const Router = express.Router();

Router.get("/", (req, res, next)=>{
    res.send("<p>Hello world</p>");
})


module.exports = Router;