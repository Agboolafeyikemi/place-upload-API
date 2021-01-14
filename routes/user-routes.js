const express = require("express");
const bodyPerser = require("body-parser");

const usersController = require("../controllers/user-controller");

const router = express.Router();

router.get("/:uid", usersController.getuserById);

router.get("/", usersController.getAllUsers);

router.post("/", usersController.createUser);

router.patch("/:uid", usersController.editUser);

module.exports = router;
