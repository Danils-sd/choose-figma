const express = require("express");

const router = express.Router();

const controllerAuth = require("../controllers/auth.controller");

router.post("/auth/singIn", controllerAuth.singInUser);

router.post("/auth/regist", controllerAuth.createUser);

module.exports = router;