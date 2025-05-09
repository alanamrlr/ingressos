function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if(quantidadeIngresso <= 0 || isNaN(quantidadeIngresso)){
        alert('Selecione uma quantidade válida.');
        return;
    }

    if (tipoIngresso == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if (tipoIngresso == 'inferior'){
        comprarInferior(quantidadeIngresso);
    } else{
        comprarSuperior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').innerText);
    if (quantidadeIngresso > quantidadePista ) {
        alert (`Não está disponível essa quantidade de ingressos para a pista. Atualmente temos ${quantidadePista} ingressos.`)
    } else {
        alert ('Compra bem sucedida!')
        quantidadePista = quantidadePista - quantidadeIngresso;
        document.getElementById('qtd-pista').innerText = quantidadePista;
    }
}

function comprarInferior(quantidadeIngresso) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').innerText);
    if (quantidadeIngresso > quantidadeInferior) {
        alert (`Não está disponível essa quantidade de ingressos para Cadeira Inferior. Atualmente temos ${quantidadeInferior} ingressos.`)
    } else {
        alert ('Compra bem sucedida!')
        quantidadeInferior = quantidadeInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').innerText = quantidadeInferior;
    }
}

function comprarSuperior(quantidadeIngresso) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').innerText);
    if (quantidadeIngresso > quantidadeSuperior) {
        alert (`Não está disponível essa quantidade de ingressos para Cadeira Superior. Atualmente temos ${quantidadeSuperior} ingressos.`)
    } else {
        alert ('Compra bem sucedida!')
        quantidadeSuperior = quantidadeSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').innerText = quantidadeSuperior;
    }
}