const router = require("express").Router();
const User = require("../models/User")

//register
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try{
    //add user to db
    const savedUser = await newUser.save();
    //status 200 is successful, 201 is successfully added 
    res.status(201).json(savedUser)
    } catch (err){
        res.status(500).json(err)
    }
})


module.exports = router