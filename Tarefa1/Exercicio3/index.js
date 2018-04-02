const express = require("express");
const exphbs = require("express-handlebars");
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

//setup do handlebars
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

//setupu do session
app.use(session({
    secret: 'my express secret',
}));
app.use(cookieParser());

//contador de acessos totais, fica na memória do servidor
let totalAccesses = 0;

//Configuração de rotas
app.get("/tarefa1/somatorio", (req, res, next) => {
    totalAccesses++;
    
    let soma = 0;
    let inicio = parseInt(req.query['inicio']);
    let fim = parseInt(req.query['fim']);
    for (let i = parseInt(inicio); i < parseInt(fim) + 1; i++) {
        soma = soma + i;
    }

    //contagem por sessão
    if (typeof req.session.views === 'undefined') {
        req.session.views = 1;
    }else{
        req.session.views++
    }

    let browserViews = req.cookies.browserViews;
    //contagem por browser
    if (browserViews) browserViews++;
    else browserViews = 1;
    res.cookie('browserViews', browserViews, { maxAge: 900000 });

    let views = req.session.views;

    res.render("Somatorio", { inicio, fim, soma, views, browserViews, totalAccesses });
});

app.listen(8080, () => console.log("Server started!!!"));