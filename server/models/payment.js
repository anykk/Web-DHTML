const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
  number: String,
  expiry: String,
  cvc: String,
  sum: Number,
  comment: {
    type: String,
    default: ''
  },
  email: String,
  secure: {
    type: Boolean,
    default: true
  }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
