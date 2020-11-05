const myRemove = (arr, item) => {

    if (typeof (arr) !== 'object' || typeof (item) !== 'number') {
        throw new Error('Invalid Parameter(s)')
    }

    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


module.exports = myRemove