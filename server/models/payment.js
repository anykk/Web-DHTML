const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({

});

const Payment = mongoose.model(paymentSchema);
module.exports = Payment;
