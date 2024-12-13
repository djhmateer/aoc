import * as fs from "fs";
import { console } from "inspector";

// const fileContent: string = fs.readFileSync('4.txt', 'utf-8');

// horizontal

// vertical

// diagonal down right

// diagonal down left

// diagonal up right

// diagonal up left

// reverse of 6 above

const fileContent: string = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const data: string[][] = fileContent
    .trim()                       // Remove leading and trailing whitespace and line breaks
    .split('\n')                  // Split the sting into an array of lines
    .map(line => line.split('')); // Split each line into an array of characters


let counter = 0;
// 1. make a string - horizontal
for (let rowNumber = 0; rowNumber < data.length; rowNumber++) {

    console.log("checking row number: ", rowNumber);
    // why does debugger go into the js file here?
    const rowToCheck: string = data[rowNumber].join('');

    // forward (3 in test case)
    counter += newFunction(rowToCheck, "XMAS");

    // reverse (2 in test case)
    counter += newFunction(rowToCheck, "SAMX");
}

function newFunction(haystack: string, needle: string): number {
    let funcCounter = 0;
    let xmasIndex = haystack.indexOf(needle);
    while (xmasIndex > -1) {
        console.log(` Found ${needle}, column ${xmasIndex}: ${haystack}`);
        funcCounter++;
        // Continue searching from the next position after the current match
        xmasIndex = haystack.indexOf(needle, xmasIndex + 1);
    }
    return funcCounter;
}
// 2. check string forwards and reverse for XMAS
// const foo: string = "MMMSXXMASM";
// const index = foo.indexOf('XMAS');
// console.log(index);



// data.forEach(row => {
//     console.log(row.join(' '));
// });
