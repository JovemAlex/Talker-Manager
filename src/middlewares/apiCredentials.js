const crypto = require('crypto');

module.exports = (req, _res, next) => {
  const token = crypto.randomBytes(8).toString('hex');
  req.login = token;
  next();
};
