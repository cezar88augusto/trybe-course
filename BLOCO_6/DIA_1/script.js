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



function checkAll(evt) {
    if (inputs[0].value.length> 10) {
        evt.preventDefault();
        alert("Nome deve menos que 40 caracteres!")
    }
    if (inputs[1].value.length> 5) {
        evt.preventDefault();
        alert("Email excede o número de caracteres")
    }

}

document.getElementById("send").addEventListener('click', checkAll, false);