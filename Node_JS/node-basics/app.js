/**
const fs = require("fs");

const content = fs.readFileSync("message.txt", "utf-8");

console.log("File content is:");
console.log(content);
**/

const path = require("path");

const filePath = path.join(__dirname, "message.txt");

console.log("Full path to message.txt:");
console.log(filePath);

