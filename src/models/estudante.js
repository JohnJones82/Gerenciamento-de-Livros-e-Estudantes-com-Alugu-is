let proximoId = 1;

module.exports = (body, id = proximoId) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.matricula != undefined &&
        body.matricula != "" &&
        body.ano != undefined &&
        !isNaN(body.ano) &&
        body.ano > 0 &&
        body.curso != undefined &&
        body.curso != ""
    ) {
        return {
            id: id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        };
    }
};