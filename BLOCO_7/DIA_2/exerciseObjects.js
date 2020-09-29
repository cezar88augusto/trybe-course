//Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//1 - Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

/* function addPeriod(object, period, key) {
    let keyName = key;
    object[keyName] = period;
    return console.log(object);
} */

//addPeriod(lesson2, 'tarde', 'turno');

//2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

/* function objectKeys(object) {
    for (let key in object) {
        console.log(key)
    }
} */

//objectKeys(lesson1);

//3 - Crie uma função para mostrar o tamanho de um objeto.

/* function objectLength(object) {
   return console.log(Object.keys(object).length);
}

objectLength(lesson3); */

//4  - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

/* const listObjectValue = (object) => Object.values(object);

console.log(listObjectValue(lesson1));
 */
//5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
//Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
//Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLesson = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLesson);

//6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (allLesson) => {
    let numeroDeEstudantesTotal = 0;
    const array = Object.keys(allLesson);
    for (const key in array) {
        numeroDeEstudantesTotal += allLesson[array[key]].numeroEstudantes;
    }
    return numeroDeEstudantesTotal;
}

console.log(totalStudents(allLesson));

//7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
//console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));
