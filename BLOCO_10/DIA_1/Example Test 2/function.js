/* const removeSNames = (names) => {
let newNames = names;
names.forEach(element => {
if (element.toLowerCase().charAt(0) === 's') {
const index = newNames.indexOf(name)
newNames.splice(index, 1);
}
});
return newNames;
}; */

const removeSNames = names => {
    return names.filter(name => name.toLowerCase().charAt(0) !== 's');
}

module.exports = removeSNames;