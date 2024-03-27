const { login, regist } = require("../services/auth.service");

async function singInUser(req, res){
    try {
        res.json({data: {uId: await login(req.body.email, req.body.password)}});
    } catch (error) {
        console.log(error);
    }
}

async function createUser(req, res){
    try {
        res.json({data: {uId: await regist(req.body.login, req.body.email, req.body.password)}});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    singInUser,
    createUser
}