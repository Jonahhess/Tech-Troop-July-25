const fs = require("fs");

function readFileWithErrorHandling(path) {
  try {
    const file = fs.readFileSync(path, { encoding: "utf8", flag: "r" });
    return `File read successfully. Size: ${file.length} bytes`;
  } catch (error) {
    return `File not found: ${path}`;
  }
}

console.log(readFileWithErrorHandling("existing.txt"));
