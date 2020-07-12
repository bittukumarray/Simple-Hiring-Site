const express = require("express");
const Router = express.Router();
const rootDir = require('../util/path');
const User = require("../models/user");
const { render } = require("ejs");

Router.get("/", (req, res, next) => {
    res.render('home', { "error": 0 });
})

Router.post("/", async (req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const resume_link = req.body.resume_link;
    const position = req.body.position;
    const qualification = req.body.qualification;

    const user = new User({
        name: name,
        email: email,
        resume_link: resume_link,
        position: position,
        qualification: qualification
    })
    try {
        const findData = await User.find({ email: email })
        if (findData.length) {
            res.status(400).render("home", { "error": "This email is already registered" })
        }
        const userSave = await user.save();

        res.render("successful", { "name": name });
    }
    catch (e) {
        // console.log("error is ", e);
        res.status(500).render("home", { "error": "something went wrong" });
    }

})


module.exports = Router;