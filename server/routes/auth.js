const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const router = express.Router();


const secretKey = 'secretsecretsecretsecretsecretsecretsecretsecretsecretsecret';

const User = require('../models/user');

const db = 'mongodb://admin:admin_123!@ds211865.mlab.com:11865/web_backend';
mongoose.connect(db, { useNewUrlParser: true });

router.post('/login', (req, res) => {
  const userData = req.body;
  User.findOne({login: userData.login}, (err, user) => {
      if (err) { console.error(err); return res.status(500).send(); }
      if (!user) return res.status(401).send('Invalid email.');
      if (user.password !== userData.password) return res.status(401).send('Invalid password.');

      const payload = { subject: user._id, role: user.role };
      const token = jwt.sign(payload, secretKey);

      res.status(200).header('X-Set-Authorization', token).send({ role: user.role });
  });
});

router.get('/loggedIn', (req, res) => {
  const token = req.get('x-authorization');
  try {
    const decoded = jwt.verify(token, secretKey);
    res.status(200).send({ role: decoded.role });
  } catch (err) {
    console.log(err);
    res.status(401).send();
  }
});

router.post('/register', (req, res) => {
  const userData = new User(req.body);
  userData.save()
    .then(() => res.status(200).send())
    .catch(err => {
      console.log(err);
      res.status(400).send();
    });
});

module.exports = router;
