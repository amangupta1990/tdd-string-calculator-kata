module.exports = function stringCalculator(input) {
    if (input === '') {
        return 0;
    }

    if (!isNaN(input)) {
        return parseInt(input);
    }
}