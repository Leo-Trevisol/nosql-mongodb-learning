const router = require("express").Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");

const User = require("../models/user");
const Party = require("../models/party");

//define file storage

const diskStorage = require("../helpers/file-storage");

const upload = multer({ storage: diskStorage });

//middleware

const verifyToken = require("../helpers/check-token");

//helpers

const getUserById = require("../helpers/get-user-by-token");
const getUserByToken = require("../helpers/get-user-by-token");

router.post("/", verifyToken, upload.fields([{name : "photos"}]), async (req, res) => {

    //req data

    const title = req.body.title;
    const description = req.body.description;
    const partyDate = req.body.party_date;

    let files = [];

    if (req.files) {
        files = req.files.photos;
    }

    //validations

    if (!title || title.trim() === "" || description.trim() === "" || !partyDate || partyDate.trim() === "") {
        //return 
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    //veryify user

    const token = req.headers["auth-token"];

    const userByToken =  await getUserByToken(token);

    const userId = userByToken._id.toString();

    try{
        const user = await User.findOne({ _id: userId });

        //create photos array with image path

        let photos = [];

        if(files && files.length > 0){
            files.forEach((photo, i) => {
               photos[i] = photo.path;
            });

        }

        const party = new Party({
            title,
            description,
            partyDate,
            photos,
            privacy: req.body.privacy,
            userId: user._id.toString()
        });

        try{
            const newParty = await party.save();
            return res.status(201).json({ error: null, msg: "Party created successfully", data: newParty });
        }catch(err){
        return res.status(400).json({ error: err});
    }


    }catch(err){
        return res.status(400).json({ error: "User not found" });
    }
    
});

module.exports = router;
