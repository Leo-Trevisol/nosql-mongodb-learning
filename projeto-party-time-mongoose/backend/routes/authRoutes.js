const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

//register an user
router.post("/register", async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    //check for required fields
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    //checjk if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    //check if user exists
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
        return res.status(400).json({ error: "Email already registered" });
    }

    //create password hash
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //create user object
    const user = new User({
        name,
        email,
        password: passwordHash,
    });

    try{

        const newUser = await user.save();

        //create token
        const token = jwt.sign(
            {
                name: newUser.name,
                id: newUser._id,
            },
            "nossosecret"
        );

        //return token
        res.json({error : null, msg: "User created successfully", token: token});

    }catch(err){
        res.status(400).json({ error: err.message });
    }

});

//login an user

router.post("/login", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    //check for required fields
    if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    //check if user exists
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }

    //check if password matches
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        return res.status(400).json({ error: "Invalid password" });
    }

      const newUser = await user.save();

        //create token
        const token = jwt.sign(
            {
                name: user.name,
                id: user._id,
            },
            "nossosecret"
        );

        //return token
        res.json({error : null, msg: "Login successful", token: token});

});


module.exports = router;