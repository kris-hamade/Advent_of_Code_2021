var fs = require("fs");

var text = fs.readFileSync("/Users/khamade/Documents/Advent_of_Code_2021/Day1/mattnumbers").toString('utf-8');
var depthValues = text.split("\n");
var depthIncreaseCount = 0;
//console.log(depthValues);

//console.log(depthValues.length);
//console.log(`${depthValues[1]} > ${depthValues[1-1]}` + depthValues[1] > depthValues[1-1]);

depthValues.forEach(index => {
    if(depthValues[index] > depthValues[index-1]){
        console.log(depthValues[index] + " is greater than depth " + depthValues[index-1]);
        depthIncreaseCount++;
    }
});
console.log(depthIncreaseCount)
//depthValues.forEach(index => {depthCount = (depthValues[index] > depthValues[index-1]) ? depthIncreaseCount++ : console.log(depthIncreaseCount);});


