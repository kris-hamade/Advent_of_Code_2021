var fs = require("fs");

var input = fs.readFileSync("./Day2/inputday2", "utf8");
var commands = input.split("\n").map(x => {
    direction = x.split(" ", 1)[0]
    distance = parseInt(x.split(" ", 2)[1])
    return [direction,distance]
});

var horizontalPosition = 0;
var depth = 0;

var position = [horizontalPosition, depth];

commands.map(x => {
    x[0] === 'forward' ? horizontalPosition += x[1] : horizontalPosition;
    x[0] === 'up' ? depth -= x[1] : depth;
    x[0] === 'down' ? depth += x[1] : depth;
    position = [horizontalPosition, depth];
    return position;
});

console.log("Horizontal Position is: " + horizontalPosition);
console.log("Depth is: " + depth);
console.log("Position is: " + position);
console.log("Puzzle Answer is: " + horizontalPosition * depth);