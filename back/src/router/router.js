const express = require("express");

const router = express.Router();

const controllerAuth = require("../controllers/auth.controller");
const controllerFilter = require("../controllers/filter.controller")

router.post("/auth/singIn", controllerAuth.singInUser);

router.post("/auth/regist", controllerAuth.createUser);


router.get("/filter/all", controllerFilter.getA);

router.get("/filter/:hard/:pages/:lang", controllerFilter.getByP);

router.get("/filter/:id", controllerFilter.getO);

module.exports = router;