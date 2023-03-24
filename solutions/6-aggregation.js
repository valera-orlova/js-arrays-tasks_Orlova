// BEGIN
export const calculateSum = (array) => {
    let summa = 0;

    for (let arrayElement of array) {

        if (arrayElement % 3 == 0) {
            summa += arrayElement;
        }
    }
    return summa;
}
// END