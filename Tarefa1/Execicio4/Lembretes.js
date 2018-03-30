let lembretes = {};

const adicionarLembrete = (usuario, lembrete) => {
    if (lembretes[usuario])
        lembretes[usuario].push(lembrete);
    else
        lembretes[usuario] = new Array(lembrete);
};

const getLembretesUsuario = (usuario) => {
    let lembSelec = lembretes[usuario];
    return lembSelec ? lembSelec : [];
}

module.exports = {
    adicionarLembrete: adicionarLembrete,
    getLembretesUsuario: getLembretesUsuario
}