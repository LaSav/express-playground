const express = require('express');
const router = express.Router();

// Render Validation Messages:

const signup = (req, res) => {
  const name = req.body.name;
  if (name === 'lasav') {
    res.json('fail');
  }
  res.json('success');
};

module.exports = {
  signup,
};
