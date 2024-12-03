// fs is a built-in module in Node.js for file system operations
// "@types/node": "^22.10.1" for dev dependencies
import * as fs from 'fs';

// Read the file synchronously into immutable type inferred string
// need utf-8 to avoid returning a buffer (for binary files)
const fileContent = fs.readFileSync('1.txt', 'utf-8');

// Parse the file content into a 2D array of numbers
const data: number[][] = fileContent
    .split('\n')               // Split the content into lines
    .map(line =>               // Process each line
        line.split(/\s+/)      // Split the line by one or more whitespace characters
            .map(Number)       // Convert each part into a number
    );

// Iterate over the data
for (const [a, b] of data) {
  console.log(`a: ${a}, b: ${b}`);
}




// .trim() // Remove extra newlines or spaces