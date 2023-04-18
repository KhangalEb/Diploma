const mongoose = require("mongoose");

const OrderWindow = new mongoose.Schema(
  {
    student: { type: String, required: true },
    teacher: { type: String, required: true },
    edate: { type: String, required: true },
    sdate: { type: String, required: true },
    datatable: { type: String, required: true },
  },
  { collection: "order_window" }
);

const model = mongoose.model("OrderWindow", OrderWindow);
module.exports = model;