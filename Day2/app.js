var fs = require("fs");

var text = fs.readFileSync("./Day2/examplecommands", "utf8");
var commands = text.split("\n"); 
//depthValues = depthValues.map(x => parseInt(x));
split = commands.map(x => x.split(" "));
console.log(split);