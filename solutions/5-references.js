// BEGIN
export const reverse = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    for (let i = 0; i <= newArray.length - 1; i++) {
        array[i] = newArray[i]
    }
}
// END