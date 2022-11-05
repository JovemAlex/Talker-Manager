module.exports = (req, res, next) => {
  const { password } = req.body;
  const SIX = 6;

  if (!password) {
    return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < SIX) {
    return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return next();
};