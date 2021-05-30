var btn_jogador1 = document.getElementById("btn_jogador_1");
var btn_jogador2 = document.getElementById("btn_jogador_2");
var btn_parar1 = document.getElementById("btn_parar_1");
var btn_parar2 = document.getElementById("btn_parar_2");
var btn_iniciar = document.getElementById("btn_iniciar");
var cartas1 = document.getElementById("cartas1");
var cartas2 = document.getElementById("cartas2");
var pontoJogador1 = document.getElementById("jogador1");
var pontoJogador2 = document.getElementById("jogador2");
var pontoA = 0;
var pontoB = 0;

$(btn_jogador1).attr('disabled', 'disabled');
$(btn_parar1).attr('disabled', 'disabled');
$(btn_jogador2).attr('disabled', 'disabled');
$(btn_parar2).attr('disabled', 'disabled');
$(btn_jogador1).css('background-color', 'red');
$(btn_jogador2).css('background-color', 'red');
$(btn_parar1).css('background-color', 'red');
$(btn_parar2).css('background-color', 'red');
$(btn_reiniciar).css('background-color', 'red');
$(btn_reiniciar).attr('disabled', 'disabled');

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + 1;
    return aleatorio;
}
function jogador1() {
    var ponto = valorAleatorio();
    pontoA += ponto;
    $(cartas1).attr("src", '/images/' + ponto + '.png');
    $(btn_parar1).removeAttr('disabled');
    $(btn_iniciar).attr('disabled', 'disabled');
    $(btn_iniciar).css('background-color', 'red');
    $(btn_parar1).css('background-color', 'green');
    $(btn_parar2).attr('disabled', 'disabled');
    $(pontoJogador1).text(pontoA);
    if (pontoA > 21) {
        parar1();
    } else if (pontoA == 21) {
        $(pontoJogador1).text("VINTE E UM");
        $(btn_jogador2).removeAttr('disabled');
        $(btn_jogador1).attr('disabled', 'disabled');
        $(btn_jogador1).css('background-color', 'red');
        $(btn_parar1).attr('disabled', 'disabled');
        $(btn_parar1).css('background-color', 'red');
        $(btn_jogador2).css('background-color', 'green');
        parar1();
    }
}
function parar1() {
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_jogador1).css('background-color', 'red');
    $(btn_parar1).attr('disabled', 'disabled');
    $(btn_parar1).css('background-color', 'red');
    $(btn_jogador2).removeAttr('disabled');
    $(btn_jogador2).css('background-color', 'green');
}
function jogador2() {
    var ponto = valorAleatorio();
    pontoB += ponto;
    $(cartas2).attr("src", '/images/' + ponto + '.png');
    $(btn_parar2).removeAttr('disabled');
    $(btn_parar2).css('background-color', 'green');
    $(pontoJogador2).text(pontoB);
    if (pontoB > 21) {
        parar2();
    } else if (pontoB == 21) {
        $(pontoJogador2).text("VINTE E UM");
        parar2();
    }
}

function parar2() {
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_jogador2).css('background-color', 'red');
    $(btn_parar2).attr('disabled', 'disabled');
    $(btn_parar2).css('background-color', 'red');
    $(btn_reiniciar).css('background-color', 'green');
    $(btn_reiniciar).removeAttr('disabled');
    if (pontoB < pontoA && pontoA <= 21) {
        $(pontoJogador1).text("VENCEU");
        $(pontoJogador2).text("PERDEU");
    } else if (pontoB > pontoA && pontoB <= 21) {
        $(pontoJogador2).text("VENCEU");
        $(pontoJogador1).text("PERDEU");
    } else if (pontoA > 21 && pontoB < 21) {
        $(pontoJogador2).text("VENCEU");
        $(pontoJogador1).text("PERDEU");
    } else if (pontoA < 21 && pontoB > 21) {
        $(pontoJogador1).text("VENCEU");
        $(pontoJogador2).text("PERDEU");
    } else if (pontoA > 21 && pontoB > 21 || pontoA == pontoB) {
        $(pontoJogador2).text("EMPATE");
        $(pontoJogador1).text("EMPATE");
    }
}
function iniciar() {
    $(btn_jogador1).removeAttr('disabled');
    $(btn_jogador1).css('background-color', 'green');
    $(btn_iniciar).css('background-color', 'red');
}
function reiniciar() {
    $(btn_jogador1).removeAttr('disabled');
    $(btn_jogador1).css('background-color', 'green');
    $(btn_parar1).attr('disabled', 'disabled');
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    $(btn_jogador2).css('background-color', 'red');
    $(btn_parar1).css('background-color', 'red');
    $(btn_parar2).css('background-color', 'red');
    $(cartas1).attr("src", '/images/0.png');
    $(cartas2).attr("src", '/images/0.png');
    $(btn_reiniciar).css('background-color', 'red');
    $(btn_reiniciar).attr('disabled', 'disabled');
    pontoA = 0;
    pontoB = 0;
    $(pontoJogador1).text(pontoA);
    $(pontoJogador2).text(pontoB);
}