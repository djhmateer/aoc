// kebab-case.ts for filenames
import * as fs from "fs";

const fileContent: string = fs.readFileSync('2.txt', 'utf-8');

// const data: number[][] = fileContent
//   .split('\n')            // Split the content into lines
//   .map(line =>            // Process each line
//     line.split(/\s+/)     // Split the line by one or more whitespace characters
//         .map(Number)      // Convert each part into a number
//   );


const data: number[][] = [
  [7, 7, 4, 2, 1],
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

// PascalCase for class names and types
type Direction = "flat" | "up" | "down";

// camelCase for variables and functions
let totalSafe = 0;

// Take each row into an array
for (const row of data) {

  let rowSafe = true; // Track if the current row is safe
  let lastElement: number | undefined; // Previous element in the row
  let lastDirection: Direction | undefined; // Previous direction

  // Iterate over each element in the row
  for (let i = 0; i < row.length; i++) {
    const element = row[i];

    if (i === 0) {
      // Initialize the first element and continue to the next
      lastElement = element;
      continue; 
    }

    // 1. Current element is smaller than the last
    if (element < lastElement) {
      if (i > 1) {
        if (lastDirection != "down") {
          rowSafe = false;
          // break out of the loop as the row is not safe becuase the direction is not down
          break;
        }
      }

      const difference = lastElement - element;
      if (difference > 3) {
        rowSafe = false; // Unsafe due to a difference greater than 3
        break;
      }
      lastElement = element;
      lastDirection = "down";
    }

    // 2. Element is larger than the last element
    else if (element > lastElement) {
      if (i > 1) {
        if (lastDirection != "up") {
          rowSafe = false; // Unsafe due to a inconsistent direction with last element
          break;
        }
      }

      const difference = element - lastElement;
      if (difference > 3) {
        rowSafe = false; // Unsafe due to a difference greater than 3
        break
      }
      lastElement = element;
      lastDirection = "up";
    }

    // Element is the same as the last element
    else {
      rowSafe = false; // Unsafe due to consecutive identical elements
      break;
    }
  }

  if (rowSafe) {
    totalSafe += 1;
  }
}

// 516
console.log(`Total safe rows: ${totalSafe}`);

//const fileContent: string = fs.readFileSync('1full.txt', 'utf-8');

//const data: number[][] = fileContent
//.split('\n')               // Split the content into lines
//.map(line =>               // Process each line
//line.split(/\s+/)     // Split the line by one or more whitespace characters
//.map(Number)      // Convert each part into a number
//);

////Test data to help build program
//// const datab: number[][] = [
////       [3, 4],
////       [4, 3],
////       [2, 5],
////       [1, 3],
////       [3, 9],
////       [3, 3]
////   ];

//// Extract the first column (left list) and second column (right list)
//const leftList: number[] = data.map(row => row[0]); // [3, 4, 2, 1, 3, 3]
//const rightList = data.map(row => row[1]); // [4, 3, 5, 3, 9, 3]

//// how many times does the number 1 appear in the right list
//// eg first number 3 appears 3 times in right list
//// so similarity score is 3 * 3 = 9
//// 4 is 4 * 1 = 4
//// 2 is 2 * 0 = 0

//let totalSimilarityScore = 0;

//// for (let i = 0; i < leftList.length; i++) {
////     const numberToFind = leftList[i];

////     // Count how many times the current number appears in the right list
////     const countInRightList = rightList.filter(x => x === numberToFind).length;

////     // Calculate the similarity score for the current number
////     const similarityScore = numberToFind * countInRightList;

////     // Add the similarity score to the total
////     totalSimilarityScore += similarityScore;
//// }

//// ES6 way to iterate over arrays, strings, maps, etc.
//for (const numberToFind of leftList) {
//// Count occurrences of the current number in the right list
//const countInRightList = rightList
//.filter(value => value === numberToFind)
//.length;

//// Calculate and add the similarity score for this number
//totalSimilarityScore += numberToFind * countInRightList;
//}

//// smilarity score is 31 for test data
//// real answer 21328497
//console.log(`Total similarity score: ${totalSimilarityScore}`);

//// 9 + 4 + ... = 31

//// Calculate the differences and sum them up

//// Iterate over the data
//// for (const [a, b] of data) {
////   console.log(`a: ${a}, b: ${b}`);
//// }

//// Smallest number on left list eg 1
//// Smallest number on right list eg 3
//// Distance between them is 2

//// const lowest: Number = Math.min(...data[0]);
//// console.log(`The lowest number is ${lowest}`); // Output: The lowest number is 5

//// Total distance should be 11 for this small example

//// .trim() // Remove extra newlines or spaces
//const leftListSorted = [...leftList].sort((a, b) => a - b); // [1, 2, 3, 3, 3, 4]
//const rightListSorted =[...rightList].sort((a, b) => a - b); // [3, 3, 3, 4, 5, 9]
