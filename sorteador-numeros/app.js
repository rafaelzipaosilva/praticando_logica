function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    /*while (!quantidade || !de || !ate ) {
        alert('Algum campo precisa ser preenchido, por favor, verifique se todos os campos estão preenchidos');
        break;
    }

    while (quantidade > ((ate - de) + 1)) {
        alert('O campo "Quantidade de Números" é maior do que o limite de números disponíveis. Por favor, tentar novamente!');
        break;
    }
    
    while (ate < de) {
        alert('O campo "Até o número" é menor do que o campo "Do número". Assim não podemos prosseguir. Por favor, tente novamente!');
        break;
    }*/

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let btnRe = document.getElementById('btn-reiniciar');
    if (btnRe.classList.contains('container__botao-desabilitado')) {
        btnRe.classList.remove('container__botao-desabilitado');
        btnRe.classList.add('container__botao');
    } else {
        btnRe.classList.add('container__botao-desabilitado');
        btnRe.classList.remove('container__botao');
    }

    let btnSort = document.getElementById('btn-sortear');
    if (btnSort.classList.contains('container__botao')) {
        btnSort.classList.add('container__botao-desabilitado');
        btnSort.classList.remove('container__botao');
    } else {
        btnSort.classList.remove('container__botao-desabilitado');
        btnSort.classList.add('container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}