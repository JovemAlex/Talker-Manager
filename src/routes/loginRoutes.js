const express = require('express');
const apiCredentials = require('../middlewares/apiCredentials');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = express.Router();
router.use(apiCredentials);

router.post('/',
  validateEmail,
  validatePassword,
  (req, res) => {
  const token = req.login;

  return res.status(200).send({ token });
});

module.exports = router;