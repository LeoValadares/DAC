const lembretesBean = require('./Lembretes');

const guardaLembrete = (req) => {
    let usuario = req.body.usuario;
    let lembrete = req.body.lembrete;
    lembretesBean.adicionarLembrete(usuario, lembrete);
}

module.exports = guardaLembrete;