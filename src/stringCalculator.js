module.exports = function stringCalculator(input) {
    if (input === '') {
        return 0;
    }

    if (!isNaN(input)) {
        if (parseInt(input) < 0) {
            throw new Error('Negatives not allowed');
        }
        else
            if (parseInt(input) > 1000) {
                return 0;
            }
        return parseInt(input);
    }



    let delimiter = null;
    let numbers = null;
    const defaultDelimiter = /,|\n|\s+/;
    const customDelimiterMatch = input.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = input.replace(/^\/\/(.+)\n/, ''); // remove the first line (delimiter)
    }
    else {
        delimiter = defaultDelimiter;
        numbers = input;
    }


    const numbersArray = numbers.split(delimiter).map(number => parseInt(number));
    const negativeNumbers = numbersArray.filter(number => number < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
    }
    return numbersArray.reduce((acc, number) => acc + number, 0);
}