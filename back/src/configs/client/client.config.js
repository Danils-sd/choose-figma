const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} = require("firebase/auth");

const config = require("./choose-figma-client-key.json");

const app = initializeApp(config);

const auth = getAuth(app);

async function singIn(email, password){
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user._tokenResponse.localId;
    } catch(error) {
        console.log(error);
        return -1;
    }
}

async function create(email, password){
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return user._tokenResponse.localId;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = {
    singIn,
    create
}