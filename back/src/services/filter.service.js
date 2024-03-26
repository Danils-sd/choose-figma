const data = require("../configs/admin/admin.config");

async function getAll(){
    try {
        const docRef = await data.collection("layouts").get();
        const all = [];
        docRef.forEach((doc) => {
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
        console.log(error)
        return -1;
    }
}

async function getByParams(hard, pages, lang){
    try {
        const docRef = await data.collection("layouts").get();
        const all = [];
        docRef.forEach((doc) => {
            if((doc.data().hard.includes(hard) || hard == "un") && (doc.data().pages.includes(pages) || pages == "un") && (doc.data().lang.includes(lang) || lang == "un")){
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
            }
        })
        return all;

    } catch (error) {
        console.log(error);
        return -1
    }
}

async function getOne(id){
    try {
        const docRef = await data.collection("layouts").get();
        const obj = {};
        docRef.forEach((doc) => {
            if(doc.id == `${id}`){
                obj.id = doc.id,
                obj.userId = doc.data().userId,
                obj.url = doc.data().url,
                obj.name = doc.data().name,
                obj.discription = doc.data().discription,
                obj.hard = doc.data().hard,
                obj.pages = doc.data().pages,
                obj.lang = doc.data().lang
            }
        })
        return obj;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = {
    getAll,
    getByParams,
    getOne
}