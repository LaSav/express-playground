const express = require('express');
const router = express.Router();

const signup = (req, res) => {
  res.json('honeypot');
};

module.exports = { signup };
