const express = require('express');
const router = express.Router();

const { signup } = require('../validation-messages/controller');

router.route('/signup').post(signup);

module.exports = router;
