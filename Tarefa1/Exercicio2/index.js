const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

//setup do handlebars
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

const mostraHeader = require("./MostraHeader")

//Configuração de rotas
app.get("/tarefa1/mostraheader", mostraHeader);

app.listen(8080, () => console.log("Server started!!!"));