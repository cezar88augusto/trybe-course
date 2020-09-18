let comboBox = document.getElementById("combobox");
let arrayCities = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
];

for (let index = 0; index < arrayCities.length; index++) {
    let element = document.createElement("option");
    element.innerHTML = arrayCities[index];
    comboBox.appendChild(element);
}

let inputs = document.getElementsByTagName("input");
let nome = "";
let email = "";
let cpf = "";

//Nome:
inputs[0].addEventListener('keyup', function (evt) {
    if (inputs[0].value.length > 30) {
        evt.preventDefault();
        alert("Nome deve ter menos que 30 caracteres!")
    } else {
        nome = inputs[0].value;
    }
})

//Email:
inputs[1].addEventListener('keyup', function (evt) {
    if (inputs[1].value.length > 40) {
        evt.preventDefault();
        alert("Email deve ter menos que 40 caracteres!")
    } else {
        email = inputs[1].value;
    }

})

//CPF:
inputs[2].addEventListener('keyup', function (evt) {
    if (inputs[2].value.length > 11) {
        evt.preventDefault();
        alert("CPF deve ter 11 numeros!")
    } else {
        cpf = inputs[2].value;
    }
})

//Tipo de Casa:

let type = document.getElementsByName("residencia");
let typeRisidence = "";

type[0].addEventListener('click', function () {
    typeRisidence = "Casa";
})

type[1].addEventListener("click", function () {
    typeRisidence = "Apartamento";
})

//Consolidado
let dados = document.getElementsByClassName("consolidado")[0];
let send = document.getElementById("send");

send.addEventListener("click", function () {
    let nomeElement = document.createElement("div");
    nomeElement.innerText = "Nome: " + nome
        + "\n Email:" + email
        + "\n Cpf:" + cpf
        + "\n Tipo de Residência: " + typeRisidence;
    dados.appendChild(nomeElement);
})

//Limpar Consolidado

let clean = document.getElementById("clean");

clean.addEventListener('click', function(){
    while (dados.firstChild){
        dados.removeChild(dados.firstChild);
    }
});



