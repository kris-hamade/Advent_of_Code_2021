var fs = require("fs");

var input = fs.readFileSync("./Day2/inputday2", "utf8");
var commands = input.split("\n").map(x => {
    direction = x.split(" ", 1)[0]
    distance = parseInt(x.split(" ", 2)[1])
    return [direction,distance]
});
var horizontalPosition = 0;
var aim = 0;
var depth = 0;

commands.map(x => {
    console.log("command is " + x[0] + " by " + x[1]);

    x[0] === 'forward' ? horizontalPosition += x[1] : horizontalPosition;
    x[0] === 'up' ? aim -= x[1] : aim;
    x[0] === 'down' ? aim += x[1] : aim;
    x[0] === 'forward' ?  depth += (x[1] * aim): depth;

    x[0] === 'forward' ? console.log(`${depth} += ${x[1]} * ${aim}`) : "Depth Does Not Change From This Command";
    
    position = [horizontalPosition, depth];

    
    console.log("Horizontal Position is " + horizontalPosition);
    console.log("Aim is " + aim);
    console.log("Depth is: " + depth);

    return depth;
});

console.log("Horizontal Position is: " + horizontalPosition);
console.log("Aim is: " + aim);
console.log("Depth is: " + depth);
console.log("Puzzle Answer is: " + horizontalPosition * depth);