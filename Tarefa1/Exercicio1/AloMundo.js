//Arquivo análogo ao servlet de AloMundo

module.exports = (req, res) => {
    let nome = req.body.nome;
    res.render("AloMundo", {nome : nome});
}