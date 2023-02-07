const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "user-data" }
);
const model = mongoose.model("User", User);
module.exports = model;
