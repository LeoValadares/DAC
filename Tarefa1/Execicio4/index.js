const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const Lembretes = require("./Lembretes");
const GuardaLembrete = require("./GuardaLembrete");

//setup do bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));

//setup do EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("GuardaLembrete");
});

app.post("/guardalembrete", (req,res) => {
    GuardaLembrete(req);
    res.redirect("/");
});

app.get("/mostralembretes", (req,res) => {
    let usuario = req.query.usuario;
    res.render("MostraLembretes", {
        usuario: usuario,
        lembretes: Lembretes.getLembretesUsuario(usuario)
    });
});

app.listen(8080, () => console.log("Server started!!!"));