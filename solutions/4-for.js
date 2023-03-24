// BEGIN
const addPrefix = (array, pref) => {
    let newArray = [];

    for (let arrayElement of array) {

        newArray.push(pref + ' ' + arrayElement);

    }
    return newArray;
}


export default addPrefix;
// END
