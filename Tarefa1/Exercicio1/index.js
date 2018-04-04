const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//setup do bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));

//importando os "servlets"
const aloMundo = require("./AloMundo");


//setup do EJS
app.set("view engine", "ejs");

let nome = "";

app.post("/tarefa1/alomundo", aloMundo);
app.get("/tarefa1/alomundo",aloMundo);

//server para rodarmos com node app.js
//localhost:8080 no browser
app.listen(8080, () => console.log("Server started!!!"))