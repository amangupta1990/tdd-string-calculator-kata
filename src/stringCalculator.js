module.exports = function stringCalculator(input) {
    if (input === '') {
        return 0;
    }

    if (!isNaN(input)) {
        return parseInt(input);
    }

    const values = input.split(',');
    return parseInt(values[0]) + parseInt(values[1]);
}