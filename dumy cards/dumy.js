const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const dummyItems = [
  { name: 'Item 1', description: 'Description of Item 1' },
  { name: 'Item 2', description: 'Description of Item 2' },
  { name: 'Item 3', description: 'Description of Item 3' },
];

app.get('/', (req, res) => {
  res.render('items', { items: dummyItems });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
