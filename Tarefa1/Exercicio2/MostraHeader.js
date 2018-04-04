//Arquivo análogo ao servlet de MostraHeader
module.exports = (req, res) => {
    //pegando os headers com req.headers
    headers = req.headers;
    //renderizando com handlebars passando o objeto headers como parametro
    res.render("MostraHeader", {
        headers: headers
    });
}