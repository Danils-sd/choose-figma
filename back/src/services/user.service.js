const data = require("../configs/admin/admin.config");

async function getUser(userId){
    try {
        const user = await data.collection("users").doc(userId).get();
        return {
            login: user.data().login,
            email: user.data().email
        }
    } catch (error) {
        console.log(error);
        return -1;
    }
}

async function getLayouts(userId){
    try {
        const layouts = await data.collection("layouts").where("userId", "==", userId).get();
        const all = [];
        layouts.forEach((doc) => {
            all.push({
                id: doc.id,
                userId: doc.data().userId,
                url: doc.data().url,
                name: doc.data().name,
                discription: doc.data().discription,
                hard: doc.data().hard,
                pages: doc.data().pages,
                lang: doc.data().lang
            })
        })
        return all;
    } catch (error) {
        console.log(error);
        return-1
    }
}

module.exports ={
    getUser,
    getLayouts
}