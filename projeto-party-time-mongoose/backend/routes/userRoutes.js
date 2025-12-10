const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


//middleware to verify token
const verifyToken = require("../helpers/check-token");

//helpers

const getUserByToken = require("../helpers/get-user-by-token");

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

    });

    //update an user

    router.put("/", verifyToken, async (req, res) => {

        const token = req.header("auth-token");

        const user = await getUserByToken(token);

        const userReqId = req.body.id;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        const userId = user._id.toString();

        //check if the user id from token matches the user id from request body

        if (userId !== userReqId) {
            return res.status(401).json({ error: "Access denied" });
        }

        //create an user object

        const updatedData = {
            name: req.body.name,
            email: req.body.email
        };

        //check for password update
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }else if (password == confirmPassword && password != null) {
            //create password hash
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);
            updatedData.password = passwordHash;
        }

        try{

            const updatedUser = await User.findOneAndUpdate({_id: userId}, {$set: updatedData}, {new: true});

            res.json({ error: null, msg: "User updated successfully", data: updatedUser });

        }catch(err){
            res.status(400).json({ error: err.message });

        }


    });


module.exports = router;