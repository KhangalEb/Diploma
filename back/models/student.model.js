const mongoose = require("mongoose");

const Student = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        pnum1: { type: String, required: false },
        pnum2: { type: String, required: false },
        province: { type: String, required: false },
        bag: { type: String, required: false },
        sum: { type: String, required: false },
        delgerengui: { type: String, required: false },
        gender: { type: String, required: false },
        year: { type: String, required: false },
        day: { type: String, required: false },
        month: { type: String, required: false },
    },
    { collection: "student-data" }
);

const model = mongoose.model("Student", Student);
module.exports = model;
