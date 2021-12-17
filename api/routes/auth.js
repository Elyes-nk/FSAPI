const router = require("express").Router();
const emailController = require("../controllers/emailController");
const userController = require("../controllers/userController");

//Register
router.post("/register", userController.register);

//Login
router.post("/login", userController.login)

// //Email confirmation
// router.get("/confirm/:confirmationCode", emailController.verifyEmail)

module.exports = router;