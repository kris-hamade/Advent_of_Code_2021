var fs = require("fs");

var text = fs.readFileSync("./numbers", "utf8");
var depthValues = text.split("\n");
var depthIncreaseCount = 0;

depthValues.forEach((depthValue,index) => {depthCount = (depthValues[index] > depthValues[index-1]) ? depthIncreaseCount += 1 : console.log(depthIncreaseCount);});

console.log(depthIncreaseCount);


