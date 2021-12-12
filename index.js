const express = require("express");
const app = express();
//use .env to connect to mangoDB
const dotenv = require("dotenv");
//using mongoose to connect to mongoDB
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
//import jsonwebtoken
const jwt = require("jsonwebtoken");

dotenv.config();
//allow app use json from the body that get passed up to it 
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


//middleware auth
function authentificateToken(res, req, next){
    //Extracting token from header
    const authHeader = req.Headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if (err) res.sendStatus(403)
        req.user = user;
        next();
    })
}