const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy data
let items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' }
];

// PUT route to update item by id
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedName = req.body.name;

  const item = items.find(i => i.id === itemId);

  if (!item) {
    return res.status(404).send({ message: 'Item not found' });
  }

  item.name = updatedName;
  res.send({ message: 'Item updated', item });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});