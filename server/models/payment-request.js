const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentRequestSchema = new Schema({
  inn: Number,
  bik: Number,
  account: Number,
  nds: ['НДС 18%', 'НДС 10%', 'без НДС'],
  sum: Number,
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  }
})

const PaymentRequest = mongoose.model('PaymentRequest', paymentRequestSchema);
module.exports = PaymentRequest;
