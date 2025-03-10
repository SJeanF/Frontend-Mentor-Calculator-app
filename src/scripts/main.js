import {mudarTema, abrirAlert, botoesFuncionais, validarTecla, calcular, mostrarResultado, simulaTecla} from './funcoes.js';

$(document).ready(function () {
    let expressaoAtual = $('.calculator__screen__input').val();
    const regex = /^[0-9+\-*/().]$/;
    
    $('input[name="theme-selector"]').change(function() {
        mudarTema($(this))
    });

    $('.calculator__screen').on('click', function() {
        $('.calculator__screen__input').focus();
    });

    $('.calculator').submit(function(e) {
        e.preventDefault();
        expressaoAtual = calcular(expressaoAtual);
    });

    $('.calculator').on('reset', function () {
        expressaoAtual = ''
    })

    $('.calculator__screen__input').on('keydown', function(e) {
        expressaoAtual = validarTecla(e, regex, expressaoAtual)
    });

    $('.calculator button').on('click', function () {
        expressaoAtual = botoesFuncionais(this, expressaoAtual);
    });
});
