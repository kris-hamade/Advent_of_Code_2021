var fs = require("fs");

var input = fs.readFileSync("./Day3/exampleinput", "utf8");
var inputBinary = input.split("\n").map(x => x.split("",x.length));
let gammaRateBinary = []

/* for(let i = 0; i < inputBinary.length; i++){

    for(let j = 0; j < inputBinary[i].length; j++){
        gammaRateBinary.length == inputBinary.length ? console.log(gammaRateBinary) : console.log ("reset")
        gammaRateBinary.length <= inputBinary.length ? gammaRateBinary.push(inputBinary[i][j]) : gammaRateBinary = [];
    }

} */

