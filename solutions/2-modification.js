// BEGIN
export const swap = (array) => {
    let resultArray = [...array]
    let temp = resultArray[resultArray.length-1];
    resultArray[resultArray.length-1] = resultArray[0];
    resultArray[0] = temp;
    return resultArray;
};
// END