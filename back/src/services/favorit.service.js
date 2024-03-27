const data = require("../configs/admin/admin.config");

async function addFavorit(userId, layoutId){
    try {
        const user = await data.collection("users").doc(userId).collection("favorite")
        user.add({
            layoutId: layoutId
        })
        return 1;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = {
    addFavorit
}