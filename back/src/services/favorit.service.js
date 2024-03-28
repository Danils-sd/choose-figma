const data = require("../configs/admin/admin.config");
const { getOne } = require("./filter.service");
async function addFavorit(userId, layoutId){
    try {
        const user = await data.collection("users").doc(userId).collection("favorite").doc(layoutId);
        user.set({
            layoutId: layoutId
        })
        return 1;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

async function deleteFavorite(userId, layoutId){
    try {
        await data.collection("users").doc(userId).collection("favorite").doc(layoutId).delete();
        return 1
    } catch (error) {
        console.log(error);
        return -1;
    }
}

async function chekFavorite(userId, layoutId){
    try {
        const res = await data.collection("users").doc(userId).collection("favorite").doc(layoutId).get();
        if(res._fieldsProto == undefined) { return 0 };
        return 1;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

async function getFavorite(userId){
    try {
        const favotits  = await data.collection("users").doc(userId).collection("favorite").get();
        const allId = [];
        favotits.forEach((doc) => {
            allId.push(doc.id);
        })

        const favorites = [];
        for(let i = 0; i < allId.length; i++){
            const doc = await getOne(allId[i])
            favorites.push(doc);
        }
        return favorites;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = {
    addFavorit,
    deleteFavorite,
    chekFavorite,
    getFavorite
}