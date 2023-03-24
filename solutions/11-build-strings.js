// BEGIN
const buildDefinitionList = (array) => {
    if (array.length == 0 || array[0].length == 0) {
        return '';
    }

    let resultString = '<dl>';


    for (let arrayElement of array) {
        resultString += '<dt>' + arrayElement[0] + '</dt><dd>' + arrayElement[1] + '</dd>';
    }
    
    resultString += '</dl>'
    return resultString;
}


export default buildDefinitionList;

// END