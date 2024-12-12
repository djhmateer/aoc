import * as fs from "fs";

const fileContent: string = fs.readFileSync('3.txt', 'utf-8');

// const fileContent: string = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

// stage 1 look for don't() and get index numbers
const regexdont = /don't\(\)/g;

let matchdont;
const indicesdont: number[] = [];
while ((matchdont = regexdont.exec(fileContent)) !== null) {
    indicesdont.push(matchdont.index);
    console.log(matchdont.index);
}

// 34 occurances of don't()

// stage 2 get do()
const regexdo = /do\(\)/g;

let matchdo;
const indicesdo: number[] = [];
while ((matchdo = regexdo.exec(fileContent)) !== null) {
    indicesdo.push(matchdo.index);
    console.log(matchdo.index);
}

// 28 occurances of do()

// build fileContent2 
// 
let fileContent2: string = "";
let doIndexArrayPosition = 0;
let doIndexValue = 0;
for (const indexdont of indicesdont) {
    console.log(`don't() index: ${indexdont}`);

    // get everything from last doIndexValue to current indexdont
    fileContent2 += fileContent.slice(doIndexValue, indexdont);

    while (true) {
        // pull next doIndexValue from array
        doIndexValue = indicesdo[doIndexArrayPosition];

        console.log(`do() indexValue: ${doIndexValue}`);
        // do() has to be higher than don't() 
        if (doIndexValue > indexdont) {
            console.log(` do() indexValue success: ${doIndexValue}`);
            break;
        }

        doIndexArrayPosition++;
    }
}

// no more don'ts so get the rest of the fileContent
// am finishing on a do so don't need to handle finish on dont case
fileContent2 += fileContent.slice(doIndexValue);


// stage 3 - put through regex

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
while ((match = regex.exec(fileContent2)) !== null) {
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

// 77055967
console.log(`Total: ${total}`);
