// BEGIN
const getSameParity = (array) => {

    let newArray = [];
    let firstElement = Math.abs(array[0]) % 2;

    for (let arrayElement of array) {

        if (Math.abs(arrayElement % 2) === firstElement) {
            newArray.push(arrayElement);
        }
    }
    return newArray;
}


export default getSameParity;
// END