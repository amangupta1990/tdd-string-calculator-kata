module.exports = function stringCalculator(input) {
    if (input === '') {
        return 0;
    }

    if (!isNaN(input)) {
        return parseInt(input);
    }

    const numbers = input.split(/,|\n|\s+/);
    return numbers.reduce((acc, number) => acc + parseInt(number), 0);
}