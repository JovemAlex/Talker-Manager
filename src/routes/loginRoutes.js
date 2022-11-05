const express = require('express');
const apiCredentials = require('../utils/apiCredentials');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = express.Router();

router.post('/',
  validateEmail,
  validatePassword,
  (_req, res) => {
    try {
      const token = apiCredentials();
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });

module.exports = router;