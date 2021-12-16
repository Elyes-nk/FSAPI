//capacité a utilisé les routes 
const router = require("express").Router();
const User = require("../models/User");
const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");


//UPDATE
router.put("/:id", verify, async(req,res) => {
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
    
});

//DELETE
router.delete("/:id", verify, async(req,res) => {
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
    
});

//GET
router.get("/:id", verify, async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err)
    }
});

//GET ALL
router.get("/", verify, async (req, res) => {
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
  });

module.exports = router;