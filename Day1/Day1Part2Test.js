var countHigherNumbers = [
199,
200,
208,
210,
200,
207,
240,
269,
260,
263,
]

var higherNumberCount = 0;

var newNumberArray = []


countHigherNumbers.forEach((number, index) => {
    let numberCalc = countHigherNumbers[index] + countHigherNumbers[index + 1] + countHigherNumbers[index + 2];
    isNaN(numberCalc) ? false : newNumberArray.push(numberCalc);
});
console.log(newNumberArray)

console.log("There are " + newNumberArray.length + " numbers in the array")