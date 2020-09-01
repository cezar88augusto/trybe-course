var statusCarro = "desligado";
var aceleracao = 0;

function ligarDesligar(){
    if (statusCarro === "desligado") {
        statusCarro = "ligado";
    }else{
        statusCarro = "desligado"
    }
}

function acelerar(incremento) {
    aceleracao += incremento;
    return "Acelerando a " + aceleracao + "m/s"
}

function frear(decremento){
    aceleracao -= decremento
    return "Desacelerando para " + aceleracao + "m/s"
}

ligarDesligar();


