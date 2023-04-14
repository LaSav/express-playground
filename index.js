const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  const name = req.body.name;
  if (name === 'lasav') {
    res.redirect('/fail');
  }
  res.redirect('/success');
  console.log(name);
});

app.get('/fail', (req, res) => {
  res.sendFile(__dirname + '/public/fail.html');
});

app.get('/success', (req, res) => {
  res.sendFile(__dirname + '/public/success.html');
});

app.use(express.static(path.join(__dirname, './public')));

app.listen(3000, () => console.log('app listening on port 3000'));
