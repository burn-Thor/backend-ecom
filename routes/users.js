const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("get/user test successful")
})

router.post("/userposttest", (req, res) => {
    const username = req.body.username;
    res.send("Welcome " + username)
    console.log(username);
})

module.exports = router