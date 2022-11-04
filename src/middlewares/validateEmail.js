module.exports = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  }

  if (!email.match(/\S+@\S+\.\S+/)) {
    return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};