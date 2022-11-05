const express = require('express');
const readFile = require('../middlewares/readFileContent');
const writeFile = require('../middlewares/writeFileContent');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');

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

router.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
  try {
    const content = await readFile();
    const nextId = content[content.length - 1].id;
    const newTalker = { id: nextId + 1, ...req.body };
    content.push(newTalker);
    writeFile(content);
    res.status(201).json(newTalker);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
