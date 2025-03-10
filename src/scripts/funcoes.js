export function mudarTema (tema) {
    $('body').removeClass();
    $('body').addClass(tema.attr('id'));
};

export function abrirAlert(mensagem = 'caractere invalido, por favor utilizar apenas numeros simbolos como "+", "-", "*", "/" ou ","') {
    const popup = $('.calculator__screen__alert');
    popup.find('p').text(mensagem);
    popup.fadeIn(100);
    setTimeout(() => {
        popup.fadeOut(1000);
    }, 1000);
};

export function botoesFuncionais (botao, calculoAtual) {
    const botaoApertado = $(botao);
    $('.calculator__screen__input').focus();
    if (botaoApertado.hasClass('normal')) {
        calculoAtual += botaoApertado.text();
        simulaTecla(calculoAtual);
    } else if (botaoApertado.attr('id') == 'del') {
        calculoAtual = calculoAtual.slice(0, -1);
        $('.calculator__screen__input').val(calculoAtual);
    };
    return calculoAtual;
};

export function validarTecla (evento, teclasValidas, calculoAtual) {
    const teclaPressionada = evento.key;
    if (teclaPressionada.length > 1 || teclasValidas.test(teclaPressionada)) {
        if (teclaPressionada.length == 1) {
            calculoAtual += teclaPressionada;
        };
        if (teclaPressionada == 'Backspace') {
            calculoAtual = calculoAtual.slice(0, -1);
        };
    } else {
        evento.preventDefault();
        abrirAlert();
    };
    return calculoAtual;
};

export function calcular(calculo) {
    if (calculo) {
        const calculoFuncional = calculo.replace(/,/g, '.').replace(/x/g, '*');
        return mostrarResultado(eval(calculoFuncional));
    } else {
        abrirAlert('if not numbers, not results brother');
    };
};

export function mostrarResultado(resultado) {
    const resultadoBonito = String(resultado).replace('.', ',');
    $('.calculator__screen__input').val(resultadoBonito);
    return resultadoBonito;
};

export function simulaTecla(calculoAtual) {
    $('.calculator__screen__input').val(calculoAtual);
};


