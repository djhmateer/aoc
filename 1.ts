// AoC Day 1 - Part 1

// fs is a built-in module in Node.js for file system operations
// "@types/node": "^22.10.1" for dev dependencies
import * as fs from 'fs';

// Read the file synchronously into immutable string
// need utf-8 to avoid returning a buffer (for binary files)
const fileContent: string = fs.readFileSync('1.txt', 'utf-8');
// const fileContent: string = fs.readFileSync('1full.txt', 'utf-8');

// Parse the file content into a 2D array of numbers
// no error checking or validation here 
// brevity over robustness
const data: number[][] = fileContent
    .split('\n')               // Split the content into lines
    .map(line =>               // Process each line
         line.split(/\s+/)     // Split the line by one or more whitespace characters
             .map(Number)      // Convert each part into a number
    );

// Test data to help build program
// const datab: number[][] = [
//       [3, 4],
//       [4, 3],
//       [2, 5],
//       [1, 3],
//       [3, 9],
//       [3, 3]
//   ];

// Extract the first column (left list) and second column (right list)
const leftList: number[] = data.map(row => row[0]); // [3, 4, 2, 1, 3, 3]
const rightList = data.map(row => row[1]); // [4, 3, 5, 3, 9, 3]

// this mutates the original array!
// The array's contents can be modified, but the reference itself cannot point to a new array. 
// const leftListSorted = leftList.sort((a, b) => a - b); // [1, 2, 3, 3, 3, 4]

// ...  spread operator makes a shallow copy of leftList
// so as not to mutate the original array
const leftListSorted = [...leftList].sort((a, b) => a - b); // [1, 2, 3, 3, 3, 4]
const rightListSorted =[...rightList].sort((a, b) => a - b); // [3, 3, 3, 4, 5, 9]

// Calculate the differences and sum them up
let totalDifference = 0;

for (let i = 0; i < leftListSorted.length; i++) {
    const difference = Math.abs(leftListSorted[i] - rightListSorted[i]);
    totalDifference += difference;
    console.log(`Difference between element ${i + 1}: ${difference}`);
}

// 2742123
console.log(`Total difference: ${totalDifference}`);


// Iterate over the data
// for (const [a, b] of data) {
//   console.log(`a: ${a}, b: ${b}`);
// }

// Smallest number on left list eg 1
// Smallest number on right list eg 3
// Distance between them is 2

// const lowest: Number = Math.min(...data[0]);
// console.log(`The lowest number is ${lowest}`); // Output: The lowest number is 5

// Total distance should be 11 for this small example

// .trim() // Remove extra newlines or spaces