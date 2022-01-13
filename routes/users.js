const router = require("express").Router();
const verify = require("../verifyToken");

const userController = require("../controllers/userController");

//GET user with jwt token
router.get("/get-user/", userController.getSecretUser);

//GET
router.get("/:id", verify, userController.getUser);

//GET ALL
router.get("/", verify, userController.getUsers);

//UPDATE
router.put("/:id", verify, userController.update);

//DELETE
router.delete("/:id", verify, userController.delete);


module.exports = router;