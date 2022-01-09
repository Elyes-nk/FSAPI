const router = require("express").Router();
const emailController = require("../controllers/emailController");
const userController = require("../controllers/userController");
const verify = require("../verifyToken");

router.get("/verifytoken", verify, userController.verifyToken)

//Register
router.post("/register", userController.register);

//Login
router.post("/login", userController.login)


// //Email confirmation
// router.get("/confirm/:confirmationCode", emailController.verifyEmail)

module.exports = router;