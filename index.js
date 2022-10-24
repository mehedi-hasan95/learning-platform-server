const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/categories.json');
const news = require('./data/category.json');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories', (req, res) => {
  res.send(categories);
})


app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n.category_id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`The learning platform is runing with: ${port}`)
})