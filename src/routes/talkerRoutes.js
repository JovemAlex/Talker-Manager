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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const content = await readFile();
    const talkerFinded = content.find((talker) => talker.id === Number(id));
    if (!talkerFinded) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talkerFinded);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
