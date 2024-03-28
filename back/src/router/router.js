const express = require("express");

const router = express.Router();

const controllerAuth = require("../controllers/auth.controller");
const controllerFilter = require("../controllers/filter.controller");
const controllerFavorite = require("../controllers/favorit.controller");
const controllerUser = require("../controllers/user.controller");

router.post("/auth/singIn", controllerAuth.singInUser);

router.post("/auth/regist", controllerAuth.createUser);


router.get("/filter/all", controllerFilter.getA);

router.get("/filter/:hard/:pages/:lang", controllerFilter.getByP);

router.get("/filter/:id", controllerFilter.getO);


router.post("/favorite/add", controllerFavorite.addFav);

router.post("/favorite/delete", controllerFavorite.deleteFav);

router.post("/favorite/chek", controllerFavorite.chekFav);

router.get("/favorite/getAll/:userId", controllerFavorite.getFav)


router.get("/user/get/:userId", controllerUser.getU);

router.get("/user/getLayouts/:userId", controllerUser.getLa);

module.exports = router;