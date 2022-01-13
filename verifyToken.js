const jwt = require("jsonwebtoken");

//middleware auth
function verify(req, res, next) {
    const token = req.headers.authorization;
    if (token == null) return res.status(401).send({auth:false,token:null,message:"missing token"});
    jwt.verify(token, process.env.SECRET_KEY, (err, user) =>{
        if (err) return res.status(403).json({auth:false,token:null,error:err,message:"token is not valid ! "})
        req.user = user;
        next();
    });
}

module.exports = verify;
