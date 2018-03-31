//Arquivo análogo ao servlet GuardaLembrete
const lembretesBean = require('./Lembretes');

module.exports = (req, res) => {
    let usuario = req.body.usuario;
    let lembrete = req.body.lembrete;
    lembretesBean.adicionarLembrete(usuario, lembrete);
    res.redirect("/");
};