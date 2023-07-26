const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));



const dummyItems = [
    { id: 1, name: 'Item 1', quantity: 5 },
    { id: 2, name: 'Item 2', quantity: 10 },
    { id: 3, name: 'Item 3', quantity: 3 },
  ];
  
  app.get('/', (req, res) => {
    res.render('table', { items: dummyItems });
  });

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  