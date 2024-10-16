module.exports = function stringCalculator(input) {
    if (input === '') {
        return 0;
    }

    if (!isNaN(input)) {
        return parseInt(input);
    }

    const values = input.split(',');
    return values.reduce((acc, value) => acc + parseInt(value), 0);
}