const jwt = require("jsonwebtoken");


//middleware auth
function verify(res, req, next){
    //Extracting token from header
    const authHeader = req.Headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401)

    jwt.verify(token, process.env.SECRET_KEY, (err, user) =>{
        if (err) res.status(403).json("token is not valid ! ")
        req.user = user;
        next();
    })
}

module.exports = verify;
