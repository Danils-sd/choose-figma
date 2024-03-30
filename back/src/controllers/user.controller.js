const { getUser, getLayouts, createLayout } = require("../services/user.service");

async function getU(req, res){
    try {
        const userId = req.params.userId;
        res.json({data: await getUser(userId)});
    } catch (error) {
        console.log(error)
    }
}

async function getLa(req, res){
    try {
        const userId = req.params.userId;
        res.json({data: await getLayouts(userId)});
    } catch (error) {
        console.log(error);
    }
}

async function createLa(req, res){
    try{
        const doc = req.body;
        res.json({data: await createLayout(doc)});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getU,
    getLa,
    createLa
}