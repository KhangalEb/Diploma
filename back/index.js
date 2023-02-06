const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://admin:admin@cluster0.4r1xcih.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Database connected!!!");
  } catch (error) {
    console.log(error);
  }
}
connect();

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/login", async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      return res.json({ status: "ok", user: true });
    } else {
      return res.json({ status: "error", user: false });
    }
    // res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
