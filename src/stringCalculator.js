module.exports = function stringCalculator(input) {
    if (input === '') {
        return 0;
    }

    if (!isNaN(input)) {
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


    const numbersArray = numbers.split(delimiter);
    return numbersArray.reduce((acc, number) => acc + parseInt(number), 0);
}