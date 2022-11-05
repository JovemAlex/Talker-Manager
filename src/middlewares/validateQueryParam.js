const readFile = require('../utils/readFileContent');

module.exports = async (req, res, next) => {
  const { q } = req.query;
  const content = await readFile();
  const talkerSearched = content
    .filter(({ name }) => name.toLowerCase().includes(q.toLowerCase()));
  
  if (!q || !q.length) {
    return res.status(200).json(content);
  }

  if (!talkerSearched) {
    return res.status(200).json([]);
  }

  return next();
};