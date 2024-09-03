let proximoId = 1;
const estudante = require("../controller/estudante.js");
const livro = require("../controller/livro.js");

module.exports = (body, id = proximoId) => {
    if(
        body.dataAluguel != undefined &&
        body.dataAluguel != "" &&
        body.dataDevolucao != undefined &&
        body.dataDevolucao != "" &&
        estudante.show(body.idEstudante) &&
        livro.show(body.idLivro)
    ) {
        return {
            id: id,
            idLivro: body.idLivro,
            idEstudante: body.idEstudante,
            dataAluguel: body.dataAluguel,
            dataDevolucao: body.dataDevolucao,
        }
    }
}