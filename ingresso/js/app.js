function comprar() {
    //recuperar ingresso: tipo e quantidade
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    //calcular redução da qtde
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (tipo.value == "pista") {
        comprarPista(qtd);
    } else if (tipo.value == "inferior") {
        comprarInferior(qtd);
    } else {
        comprarSuperior(qtd);
    }
    
}

//atualizar a qtde
function comprarPista(qtd) {
    let qtdePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdePista) {
        alert('Quantidade indisponível para o tipo Pista');
    } else {
        qtdePista = qtdePista - qtd;
        document.getElementById('qtd-pista').textContent = qtdePista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdeInferior) {
        alert('Quantidade indisponível para o tipo Cadeira Inferior');
    } else {
        qtdeInferior = qtdeInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdeInferior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdeSuperior) {
        alert('Quantidade indisponível para o tipo Cadeira Superior');
    } else {
        qtdeSuperior = qtdeSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdeSuperior;
        alert('Compra realizada com sucesso!');
    }
}