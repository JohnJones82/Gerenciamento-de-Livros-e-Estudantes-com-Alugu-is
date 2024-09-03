let proximoId = 1;

module.exports = (body, id = proximoId) => {
    if(body.titulo != undefined && 
        body.titulo != "" &&
        body.autor != undefined && 
        body.autor != "" &&
        body.genero != undefined && 
        body.genero != "" &&
        body.ano != undefined && 
        !isNaN(body.ano) 
    ) {
        return {
            id:id,
            titulo: body.titulo,
            autor: body.autor,
            genero: body.genero,
            ano: body.ano
        };
    }
};