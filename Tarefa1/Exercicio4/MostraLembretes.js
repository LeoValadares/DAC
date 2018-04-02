//Arquivo análogo ao servlet de MostraLembrete
const Lembretes = require("./Lembretes");

module.exports = (req,res) => {
    let usuario = req.query.usuario;
    res.render("MostraLembretes", {
        usuario: usuario,
        lembretes: Lembretes.getLembretesUsuario(usuario)
    });
};