// BEGIN
const calculateAverage = (array) => {
    if (array.length == 0) return null;

    let summa = 0;
    let countElements = 0;

    for (let arrayElement of array) {
        summa += arrayElement;
        countElements += 1;
    }
    return summa / countElements;
}


export default calculateAverage;
// END