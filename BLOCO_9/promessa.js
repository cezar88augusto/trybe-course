function generatedNumber() {
    const myArray = [];
    
    for (let i = 0; i < 11; i += 1) {
        let number = Math.floor(Math.random() * 50) + 1;
        myArray.push(Math.pow(number, 2));
    }

    const sum = myArray.reduce((acc, curr) => acc += curr);
    return sum;
}

const payingPromise = () => {
    const promise = new Promise((resolve, reject) => {

        const number = generatedNumber();

        if (number < 8000) {
            return reject(number);
        }

        resolve(number);

    }).then(number => console.log([2, 3, 5, 10]
        .map(itemArray => number / itemArray)
        .reduce((acc, curr) => acc += curr)))
        .catch(() => console.log(`Algo deu errado! Número menor do que 8000:`));
}

payingPromise();
