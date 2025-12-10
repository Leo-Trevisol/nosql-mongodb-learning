const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const verifyToken = require("../helpers/check-token");

//get and user
router.get("/:id", verifyToken, async (req, res) => {

    const id = req.params.id;

    //verify if user exists
    try {
    const user = await User.findOne({ _id: id }, "-password");

    res.json({ error: null, user });

    }catch (err) {
        return res.status(400).json({ error: "User not exists " });
    }

    //update an user

    router.put("/:", verifyToken, async (req, res) => {

        

    });



});

module.exports = router;