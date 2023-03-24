// BEGIN
const getTotalAmount = (array, curs) => {
    let result = 0;

    for (let arrayElement of array) {
        
        if (arrayElement.split(' ')[0] == curs) {
            result += +arrayElement.split(' ')[1];
        }
        
    }

    return result;
}


export default getTotalAmount;
// END