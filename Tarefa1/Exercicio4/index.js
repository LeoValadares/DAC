const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

//importando os "servlets"
const guardaLembrete = require("./GuardaLembrete");
const mostraLembretes = require("./MostraLembretes");

//setup do bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));

//setup do handlebars
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

//Configuração de rotas
app.get("/tarefa1/guardalembrete", (req, res) => {
    res.render("GuardaLembrete");
});
//Registrando cada "servlet" a sua rota
app.post("/guardalembrete", guardaLembrete);
app.get("/tarefa1/mostralembretes", mostraLembretes);

app.listen(8080, () => console.log("Server started!!!"));