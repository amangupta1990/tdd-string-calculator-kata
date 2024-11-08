module.exports = function stringCalculator(stringInput) {
  if (stringInput === "") {
    return 0;
  }

  const numbersArray = getNumArrayFromString(stringInput);

  const negativeNumbers = filterNegatives(numbersArray);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
  }

  return filterLessThanThousand(numbersArray).reduce(
    (acc, number) => acc + number,
    0
  );
};

// --- helper methods ---

/*
 takes a string input with or without a custum delimiter and,
 returns an array of numbers. if no delimiter is specified in the input,
 it uses default delimiters ( commas , spaces and newlines ) 
*/
function getNumArrayFromString(numberString) {
  let delimiter = null;
  let numbers = null;
  const defaultDelimiter = /,|\n|\s+/;

  const customDelimiter = getcustomDelimiter(numberString);
  if (customDelimiter) {
    delimiter = new RegExp(customDelimiter);
    inputWithoutDelimiterLine = numberString.split("\n").slice(1).join("\n");
    numbers = inputWithoutDelimiterLine;
  } else {
    delimiter = defaultDelimiter;
    numbers = numberString;
  }

  return numbers.split(delimiter).map((number) => parseInt(number));
}

/* accepts custom delimiters speified in the first line of the string input.
delimiters must be separated by []. multiple delimiters can be specified
*/
function getcustomDelimiter(input) {
  const customDelimiterMatch = input.match(/^\/\/(\[.+\])+\n/);

  if (customDelimiterMatch) {
    delimiter = customDelimiterMatch[0]
      .slice(2, -1) // remove the slashes and new line
      .split("][") // split the delimiters
      .map((delimiter) => delimiter.replace(/[\[\]]/g, "")); // remove the opening and closing bracket

    combinedDelimiters = delimiter.join("|");

    return combinedDelimiters;
  } else return null;
}

function filterLessThanThousand(numberArray) {
  return numberArray.filter((number) => number <= 1000);
}

function filterNegatives(numbersArray) {
  return numbersArray.filter((number) => number < 0);
}
