const { getAll, getByParams, getOne } = require("../services/filter.service");

async function getA(req, res){
    try {
        res.json({data: await getAll()});
    } catch (error) {
        console.log(error);
    }
}

async function getByP(req, res){
    try {
        res.json({data: await getByParams(req.params.hard, req.params.pages, req.params.lang)});
    } catch (error) {
        console.log(error)
    }
}

async function getO(req, res){
    try {
        res.json({data: await getOne(req.params.id)})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getA,
    getByP,
    getO
}