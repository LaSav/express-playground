const express = require('express');
const app = express();
const path = require('path');

// To Use Body Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use('/validation-messages', require('./routes/validationMessagesRoutes'));
app.use('/honeypots', require('./routes/honeypotsRoutes'));

app.listen(3000, () => console.log('app listening on port 3000'));
