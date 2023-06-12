const express = require('express');
const app = express();
const path = require('path');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per windowMS
  message: 'Too many requests from this IP, please try again later',
});

// To Use Body Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply limiter to all requests:
app.use(limiter);

// Use Frontend
app.use(express.static(path.join(__dirname, './public')));

app.use('/validation-messages', require('./routes/validationMessagesRoutes'));
app.use('/honeypots', require('./routes/honeypotsRoutes'));

app.listen(3000, () => console.log('app listening on port 3000'));
