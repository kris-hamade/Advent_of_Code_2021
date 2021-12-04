var fs = require("fs");

var text = fs.readFileSync("./numbers", "utf8");
var depthValues = text.split("\n").map(x => parseInt(x));
var depthIncreaseCount = 0;

depthValues.forEach((depthValue,index) => {depthCount = (depthValues[index] > depthValues[index-1]) ? depthIncreaseCount += 1 : console.log(depthIncreaseCount) ;});

console.log("Final Count " + depthIncreaseCount);

var newDepthArray = [];
var higherNumberCount = 0;

depthValues.forEach((number, index) => {
    let combineDepthCount = depthValues[index] + depthValues[index + 1] + depthValues[index + 2];
    isNaN(combineDepthCount) ? false : newDepthArray.push(combineDepthCount);
});

newDepthArray.forEach((depthValue,index) => {newDepthCount = (newDepthArray[index] > newDepthArray[index-1]) ? higherNumberCount += 1 : console.log(higherNumberCount);});

console.log(newDepthArray);

console.log("There are " + higherNumberCount + " numbers in the array");