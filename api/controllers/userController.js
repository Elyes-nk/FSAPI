const User = require("../models/User");
const nodemailer = require("../config/nodemailer");


const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


exports.register = async(req, res) => {
    const token = jwt.sign({email: req.body.email}, process.env.SECRET_KEY)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString(),
        confirmationCode: token,
      });
      try {
        const user = await newUser.save();
        res.status(201).json(user);
        // // email generator
        // nodemailer.sendConfirmationEmail(
        //   user.username,
        //   user.email,
        //   user.confirmationCode
        // );
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.login = async(req,res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("wrong credentials");

        //password check
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password &&
          res.status(401).send({message:"Wrong password or username!"});

        // //activated account check with mail
        // user.status !== "Active" && 
        //   res.status(401).send({message: "Pending Account. Please Verify Your Email!"});
        

        const accessToken = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
            );

        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
}

exports.update = async(req,res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
              ).toString();
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {
                $set: req.body,
                },
                {new:true});
            res.status(200).json(updatedUser);
        } catch(err) {
            //renvoie message fail
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("update only your account")
    }
    
}

exports.delete = async(req,res) => {
    if(req.body.userId === req.params.id){
            try{
                const user = await User.findById(req.params.id)
                try{
                        await User.findByIdAndDelete(req.params.id);
                        res.status(200).json("user has been deleted");
                    } catch(err) {
                        //renvoie message fail
                        res.status(500).json(err)
                    }
            }catch{
                res.status(404).json("user not found")
            }

    }else{
        res.status(401).json("delete only your account")
    }
    
}

exports.getUser = async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getUsers = async (req, res) => {
    const query = req.query.new;
    //add this route juste for admin
    //if (req.user.isAdmin) {
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    /*} else {
      res.status(403).json("You are not allowed to see all users!");
    }*/
  }