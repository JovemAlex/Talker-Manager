const express = require('express');
const readFile = require('../middlewares/readFileContent');

const router = express.Router();

router.get('/', async (req, res) => {
  const content = await readFile();
  try {
    return res.status(200).json(content);
  } catch (error) {
    return res.status(200).json(content);
  }
});

module.exports = router;
