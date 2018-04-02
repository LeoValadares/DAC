const express = require("express");
const exphbs = require("express-handlebars");
const session = require('express-session');

const app = express();


//setup do handlebars
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

//setupu do session
app.use(session({
    secret: 'my express secret',
  }));


//Configuração de rotas
app.get("/tarefa1/somatorio", (req, res, next) => {
    let soma = 0;
    let inicio = parseInt(req.query['inicio']);
    let fim = parseInt(req.query['fim']);
    for (let i = parseInt(inicio); i < parseInt(fim) + 1; i++) {
        soma = soma + i;
    }

    if (typeof req.session.views === 'undefined') {
        req.session.views = 1;
    }else{
        req.session.views++
    }

    console.log(req.session)
    views = req.session.views;

    res.render("Somatorio", { inicio, fim, soma, views });
});

app.listen(8080, () => console.log("Server started!!!"));