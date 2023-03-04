const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  callOffice: {
    type: String,
    required: true,
  },
  callMobile: {
    type: String,
    required: true,
  },
  callOffice: {
    type: String,
    required: true,
  },
  sms: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
