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

// both are the same (10 in the case of the test case)
const maxFoo = data.length;
// const colCount = data[0].length;
// console.log("rowCount: ", rowCount, "colCount: ", colCount);

let totalCount = 0;
// 1. make a string - horizontal
// for (let rowNumber = 0; rowNumber < maxFoo; rowNumber++) {

//     console.log("checking row number: ", rowNumber);
//     // why does debugger go into the js file here?
//     const stringToCheck: string = data[rowNumber].join('');

//     // forward (3 occurances in test case)
//     totalCount += countOccurrences(stringToCheck, "XMAS");

//     // reverse (2 occurances in test case)
//     totalCount += countOccurrences(stringToCheck, "SAMX");
// }

// 2. vertical
// for (let columnNumber = 0; columnNumber < maxFoo; columnNumber++) {
//     console.log("checking column number: ", columnNumber);
//     const stringToCheck: string = data.map(row => row[columnNumber]).join('');

//     totalCount += countOccurrences(stringToCheck, "XMAS");

//     totalCount += countOccurrences(stringToCheck, "SAMX");
// }


// **HERE - logical problem.. am getting double ups on the diagonals
// implement a checker to see if starting position  for this check has already been done?

// start every row 
for (let startRow = 0; startRow < maxFoo; startRow++) {

    // start every column on every row
    for (let startCol = 0; startCol < maxFoo; startCol++) {
        // console.log("checking diagonal down right starting at row: ", startRow, "column: ", startCol);

        let stringToCheck = "";

        // 3. go down and right from starting point of rowNumber and columnNumber
        for (let i = 0; i < maxFoo - startRow; i++) {
            const r = i + startRow;
            const c = i + startCol;

            if (c >= maxFoo) continue; 
            if (r >= maxFoo) continue; 

            stringToCheck += data[r][c];
            // console.log(stringToCheck);
        }

        totalCount += countOccurrences(stringToCheck, "XMAS");

        totalCount += countOccurrences(stringToCheck, "SAMX");
    }
}

console.log("Total count: ", totalCount);

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
