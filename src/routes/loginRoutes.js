const express = require('express');
// const crypto = require('crypto');
const apiCredentials = require('../middlewares/apiCredentials');

const router = express.Router();
router.use(apiCredentials);

router.post('/', (req, res) => {
  const token = req.login;

  return res.status(200).send({ token });
});

module.exports = router;