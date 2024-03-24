const data = require("../configs/admin/admin.config");
const { singIn, create } = require("../configs/client/client.config");

async function login(email, password){
    try {
        const uId = await singIn(email, password);
        return uId;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

async function regist(login, email, password){
    try {
        const uId = await create(email, password);
        if(uId != -1){
            const docRef = data.collection("users").doc(uId);
            await docRef.set({
                login: login,
                email: email,
                password: password
            })
            return uId;
        }
        return -1;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = {
    login,
    regist
}