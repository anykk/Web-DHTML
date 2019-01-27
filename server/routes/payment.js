const express = require('express');
const router = express.Router();

const { verifyToken } = require('../utils');

router.post('/getPaymentFile', verifyToken, (req, res) => {
  const result = `ИНН получателя: ${req.body.inn}\r\nБИК: ${req.body.bik}\r\nНомер счета: ${req.body.account
  }\r\nСколько: ${req.body.sum}\r\nЗа что: ${req.body.nds}`
  res.status(200).send(result);
});

module.exports = router;
