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
    const stringToCheck: string = data[rowNumber].join('');

    // forward (3 occurances in test case)
    counter += countOccurrences(stringToCheck, "XMAS");

    // reverse (2 occurances in test case)
    counter += countOccurrences(stringToCheck, "SAMX");
}

// 2. vertical
for (let columnNumber = 0; columnNumber < data[0].length; columnNumber++) {
    console.log("checking column number: ", columnNumber);
    const stringToCheck: string = data.map(row => row[columnNumber]).join('');

    // forward 
    counter += countOccurrences(stringToCheck, "XMAS");

    // reverse 
    counter += countOccurrences(stringToCheck, "SAMX");
}

// 3. diagonal down right
for (let rowNumber = 0; rowNumber < data.length; rowNumber++) {
    console.log("checking diagonal down right row number: ", rowNumber);
    let stringToCheck = '';
    for (let i = 0; i < data.length - rowNumber; i++) {
        stringToCheck += data[i + rowNumber][i];
    }
    console.log("stringToCheck: ", stringToCheck);

    // forward 
    counter += countOccurrences(stringToCheck, "XMAS");

    // reverse (0 occurance in test case)
    counter += countOccurrences(stringToCheck, "SAMX");
}

console.log("Total occurances: ", counter);

function countOccurrences(haystack: string, needle: string): number {
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
