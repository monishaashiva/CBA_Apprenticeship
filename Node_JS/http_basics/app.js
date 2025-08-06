/**
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'X-Powered-By': 'Node.js',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Set-Cookie': 'sessionid=abc123; HttpOnly'
  });

  res.end('<h1>Hello, World!</h1>');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
**/

const express = require("express");
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// 🔍 Route to log all incoming headers
app.get("/headers-test", (req, res) => {
  console.log("Request Headers Received:");
  console.log(req.headers);

  res.json({ message: "Headers logged on server!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
