module.exports = (req, res, next) => {
  const { age } = req.body;
  const EIGHTEEN = 18;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < EIGHTEEN) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  return next();
};