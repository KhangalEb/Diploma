const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const authenticateJWT = require("./middleware/index");
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
      role: req.body.role,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    if (user) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        "secret123"
      );
      return res.json({ status: "ok", user: token, role: user.role });
    } else {
      return res.json({ status: "error", user: false });
    }
    // res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/userData", authenticateJWT, async (req, res) => {
  console.log(req.user);
  // const token = req.headers["x-access-token"];
  const { token } = req.body;
  try {
    const useremail = req.user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "userData error" });
  }
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
