const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

//setup do handlebars
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

//Configuração de rotas
app.get("/tarefa1/mostraheader", (req, res) => {
    //pegando os headers com req.headers
    headers = req.headers;
    //renderizando com handlebars passando o objeto headers como parametro
    res.render("MostraHeader", {
        headers: headers
    });
});

app.listen(8080, () => console.log("Server started!!!"));