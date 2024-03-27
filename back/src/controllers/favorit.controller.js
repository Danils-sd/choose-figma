const { addFavorit } = require("../services/favorit.service");

async function addFav(req, res){
    try {
        const userId = req.body.userId;
        const layoutId = req.body.layoutId;
        res.json({data: await addFavorit(userId, layoutId)});
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addFav
}