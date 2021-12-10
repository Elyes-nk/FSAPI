const express = require("express");
const app = express();
//use .env link to connect to mangoDB
const dotenv = require("dotenv");
//mongoose to connect to mongoDB
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();
//use json
app.use(express.json());


//connect to mangoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to MongoDB")).catch(err=>console.log(err));

app.listen("5000", ()=>{
    console.log("backend is running !");
});


//========== Routes =================
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
//===================================

