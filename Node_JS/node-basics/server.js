const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // Set response header
  res.end("Hello Monishaa!! Your Node.js server is working perfectly.");
});

// Start the server
server.listen(3000, () => {
  console.log("✅ Server is running at http://localhost:3000");
});
