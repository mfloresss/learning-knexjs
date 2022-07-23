const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:name", userController.getUser);
router.post("/users", userController.createUser);

module.exports = router;
