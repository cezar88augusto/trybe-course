let singer = {
    name: "Bruce",
    lastName: "Dickinson",
    age: 65,
    bestAlbuns: ["Fear of the Dark", "Brave New World","Aces High"],
    bornInfo: { city: "Worksop", country: "England"}
}

//Adicionando propriedades fora do escopo.

singer.height = 1.75;
singer.apelidos = ["Apelido1", "Apelido2", "Aelido3"];

console.log("O canto " + singer.name + ' ' + singer.lastName + " possui " + singer.age + " anos.");

//Declaração de propriedades para objetos
singer["fullName"] = singer.name + ' ' + singer.lastName;

console.log("O cantor " + singer.fullName + " nasceu na cidade " + singer.bornInfo.city)

//For-in - Funciona melhor para objetos!

//Exemplo 1

for (let chave in singer) {
 console.log(chave,singer)
}

//Exemplos 2

//O ínidice e o nome
let cores = ["Vermelho", "Azul", "Verde"]

for (let i in cores) {
 console.log(i,cores[i])
}

//Ou somentes as cores:

for (let i in cores) {
   console.log(cores[i])
}

