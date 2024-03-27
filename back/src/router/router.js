const express = require("express");

const router = express.Router();

const controllerAuth = require("../controllers/auth.controller");
const controllerFilter = require("../controllers/filter.controller");
const controllerFavorite = require("../controllers/favorit.controller");

router.post("/auth/singIn", controllerAuth.singInUser);

router.post("/auth/regist", controllerAuth.createUser);


router.get("/filter/all", controllerFilter.getA);

router.get("/filter/:hard/:pages/:lang", controllerFilter.getByP);

router.get("/filter/:id", controllerFilter.getO);


router.post("/favorite/add", controllerFavorite.addFav);

module.exports = router;