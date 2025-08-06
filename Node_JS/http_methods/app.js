const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json()); // Parse JSON body

// 📌 GET Method
app.get("/api/data", (req, res) => {
  res.json({ message: "GET request received!" });
});

// 📌 POST Method
app.post("/api/data", (req, res) => {
  const body = req.body;
  res.json({ message: "POST request received!", data: body });
});

// 📌 PUT Method
app.put("/api/data", (req, res) => {
  const body = req.body;
  res.json({ message: "PUT request received!", updatedData: body });
});

// 📌 DELETE Method
app.delete("/api/data", (req, res) => {
  res.json({ message: "DELETE request received!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
