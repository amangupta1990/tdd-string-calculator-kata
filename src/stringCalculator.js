module.exports = function stringCalculator(input) {
    if (input === '') {
        return 0;
    }

    let delimiter = null;
    let numbers = null;
    const defaultDelimiter = /,|\n|\s+/;

    const customDelimiter = getcustomDelimiter(input);
    if (customDelimiter) {
        delimiter = new RegExp(customDelimiter);
        inputWithoutDelimiterLine = input.split('\n').slice(1).join('\n');
        numbers = inputWithoutDelimiterLine;

    }
    else {
        delimiter = defaultDelimiter;
        numbers = input;
    }


    const numbersArray = numbers.split(delimiter).map(number => parseInt(number)).filter(number => number <= 1000);
    const negativeNumbers = numbersArray.filter(number => number < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
    }
    return numbersArray.reduce((acc, number) => acc + number, 0);
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