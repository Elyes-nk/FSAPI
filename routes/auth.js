const router = require("express").Router();
const userController = require("../controllers/userController");
const verify = require("../verifyToken");

router.get("/verifytoken", verify, userController.verifyToken)

//Register
router.post("/register", userController.register);

//Login
router.post("/login", userController.login)


module.exports = router;