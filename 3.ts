import * as fs from "fs";

const fileContent: string = fs.readFileSync('3.txt', 'utf-8');

// const fileContent: string = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

// Regular expression to match `mul(x,y)` with 1-3 digit numbers for x and y
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

// / dentoes start of regex
// mul\(: Matches the literal string mul(.
// (\d{1,3}): Captures a group of 1 to 3 digits for x.
// ,: Matches the comma separating x and y.
// (\d{1,3}): Captures a group of 1 to 3 digits for y.
// \): Matches the closing parenthesis.
// /g denotes the end of the regex and the global flag, which allows the regex to match all occurrences in the string.


// Find all matches
const matches = [];
let match;
while ((match = regex.exec(fileContent)) !== null) {
    matches.push({ x: match[1], y: match[2] });
    console.log(match);
}

// Iterate over mathhes array
let total = 0;
for (const match of matches) {
    console.log(`x = ${match.x}, y = ${match.y}`);
    const x: number = match.x;
    const y: number = match.y;
    total += x * y;
}

// 153469856
console.log(`Total: ${total}`);
