import * as fs from "fs";

const fileContent: string = fs.readFileSync('2.txt', 'utf-8');

const data: number[][] = fileContent
  .split('\n')            // Split the content into lines
  .map(line =>            // Process each line
    line.split(/\s+/)     // Split the line by one or more whitespace characters
        .map(Number)      // Convert each part into a number
  );


// const data: number[][] = [
//   [7, 6, 4, 2, 1],
//   [1, 2, 7, 8, 9],
//   [9, 7, 6, 2, 1],
//   [1, 3, 2, 4, 5],
//   [8, 6, 4, 4, 1],
//   [1, 3, 6, 7, 9],
// ];

type Direction = "flat" | "up" | "down";

let totalSafe = 0;

// Take each row into an array
for (const row of data) {

  // Part 2 - Problem Dampener.
  //  make new array with take out 0 then first etc.. elements... to see if it is safe
  //  if safe then exit

  // A section
  for (let j = -1; j < row.length; j++) {
    const rowCopy = [...row]; // Make copy of array

    if (j === -1) {
      // Do nothing skip the first element as want to leave array as is to see if safe
    } else {
      rowCopy.splice(j, 1); // Remove element at index j to see if problem dampener works
    }

    let rowSafe = true; // Track if the current row is safe
    let lastElement: number | undefined; // Previous element in the row
    let lastDirection: Direction | undefined; // Previous direction

    // B section
    // Iterate over each element in rowCopy 
    for (let i = 0; i < rowCopy.length; i++) {
      const element = rowCopy[i];

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
            // break out of the B loop as the row is not safe because the direction is not down
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
      break; // Exit out of A loop as row is safe
    }
  } // end of B section
} // end of A section

// 561
console.log(`Total safe rows: ${totalSafe}`);
