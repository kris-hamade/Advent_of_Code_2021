var fs = require("fs");

var text = fs.readFileSync("./numbers", "utf8");
var depthValues = text.split("\n");
var depthIncreaseCount = 0;
//console.log(depthValues);

//console.log(depthValues.length);

//console.log(`${depthValues[1]} > ${depthValues[1-1]}` + depthValues[1] > depthValues[1-1]);

/*depthValues.forEach((depthValue,index) => {
    if(depthValues[index] > depthValues[index-1]){
        console.log(depthValues[index] + " is greater than depth " + depthValues[index-1]);
        depthIncreaseCount++;
    }
});*/

depthValues.forEach((depthValue,index) => {depthCount = (depthValues[index] > depthValues[index-1]) ? depthIncreaseCount += 1 : console.log(depthIncreaseCount);});

console.log(depthIncreaseCount);


