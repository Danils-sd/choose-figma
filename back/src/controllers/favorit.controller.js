const { addFavorit, deleteFavorite, chekFavorite, getFavorite } = require("../services/favorit.service");

async function addFav(req, res){
    try {
        const userId = req.body.userId;
        const layoutId = req.body.layoutId;
        res.json({data: await addFavorit(userId, layoutId)});
    } catch (error) {
        console.log(error)
    }
}

async function deleteFav(req, res){
    try {
        const userId = req.body.userId;
        const layoutId = req.body.layoutId;
        res.json({data: await deleteFavorite(userId, layoutId)});
    } catch (error) {
        console.log(error);
    }
}

async function chekFav(req, res){
    try {
        const userId = req.body.userId;
        const layoutId = req.body.layoutId;
        res.json({data: await chekFavorite(userId, layoutId)});
    } catch (error) {
        console.log(error);
    }
}

async function getFav(req, res){
    try {
        const userId = req.params.userId;
        res.json({data: await getFavorite(userId)});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    addFav,
    deleteFav,
    chekFav,
    getFav
}