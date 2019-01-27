const jwt = require('jsonwebtoken');
const secretKey = 'secretsecretsecretsecretsecretsecretsecretsecretsecretsecret';

function verifyToken(req, res, next) {
  const [token, role] = req.get('x-authorization').split('__');
  try {
    const decoded = jwt.verify(token, secretKey);
    if (decoded.role !== role) return res.status(401).send();
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send();
  }
}

function verifyAdmin(req, res, next) {
  const [token, role] = req.get('x-authorization').split('__');
  try {
    const decoded = jwt.verify(token, secretKey);
    if (decoded.role !== role) return res.status(401).send();
    if (decoded.role !== 'admin') return res.status(401).send();
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send();
  }
}

module.exports = { verifyToken, verifyAdmin };
