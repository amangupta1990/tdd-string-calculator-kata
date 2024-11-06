module.exports = function stringCalculator(stringInput) {
    if (stringInput === '') {
        return 0;
    }


    const numbersArray = getNumArrayFromString(stringInput)

    const negativeNumbers = filterNegatives(numbersArray);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numbersArray.reduce((acc, number) => acc + number, 0);
}


function getNumArrayFromString(numberString) {

    let delimiter = null;
    let numbers = null;
    const defaultDelimiter = /,|\n|\s+/;

    const customDelimiter = getcustomDelimiter(numberString);
    if (customDelimiter) {
        delimiter = new RegExp(customDelimiter);
        inputWithoutDelimiterLine = numberString.split('\n').slice(1).join('\n');
        numbers = inputWithoutDelimiterLine;

    }
    else {
        delimiter = defaultDelimiter;
        numbers = numberString;
    }

    return numbers.split(delimiter).map(number => parseInt(number)).filter(number => number <= 1000);
}


function filterNegatives(numbersArray) {
    return numbersArray.filter(number => number < 0);

}

function getcustomDelimiter(input) {
    const customDelimiterMatch = input.match(/^\/\/(\[.+\])+\n/);

    if (customDelimiterMatch) {
        delimiter = customDelimiterMatch[0]
            .slice(2, -1) // remove the slashes and new line
            .split('][') // split the delimiters
            .map(delimiter => delimiter.replace(/[\[\]]/g, '')) // remove the opening and closing bracket

        combinedDelimiters = delimiter.join('|');

        return combinedDelimiters
    }

    else return null;
}