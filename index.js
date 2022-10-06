const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("DB connected"))
    .catch((err)=>{console.log(err)});


app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})





