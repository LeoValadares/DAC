const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

//importando os "servlets"
const guardaLembrete = require("./GuardaLembrete");
const mostraLembretes = require("./mostralembretes");

//setup do bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));

//setup do handlebars
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

//Configuração de rotas
app.get("/", (req, res) => {
    res.render("GuardaLembrete");
});
//Registrando cada "servlet" a sua rota
app.post("/guardalembrete", guardaLembrete);
app.get("/mostralembretes", mostraLembretes);

app.listen(8080, () => console.log("Server started!!!"));