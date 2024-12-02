// fs is a built-in module in Node.js for file system operations
// "@types/node": "^22.10.1" for dev dependencies
import * as fs from 'fs';

// Read the file synchronously
const fileContent = fs.readFileSync('1.txt', 'utf-8');

// Split the content into lines and map into an array of arrays
const data: number[][] = fileContent
  .trim() // Remove extra newlines or spaces
  .split('\n') // Split by lines
  .map(line => line.split(/\s+/).map(Number)); // Split each line by spaces and convert to numbers

// Iterate over the data
for (const [a, b] of data) {
  console.log(`a: ${a}, b: ${b}`);
}
