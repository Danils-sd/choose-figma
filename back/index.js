const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5010;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})