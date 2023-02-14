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
      fname: req.body.fname,
      lname: req.body.lname,
      pnum1: req.body.pnum1,
      pnum2: req.body.pnum2,
      province: req.body.province,
      bag: req.body.bag,
      sum: req.body.sum,
      delgerengui: req.body.delgerengui,
      gender: req.body.gender,
      surguuli: req.body.surguuli,
      year: req.body.year,
      day: req.body.day,
      month: req.body.month,
      angi: req.body.angi,
      tovchtaniltsuulga: req.body.tovchtaniltsuulga,
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
          _id: user._id,
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

app.post("/api/update", authenticateJWT, async (req, res) => {
  try {
    const _id = req.user._id;

    User.findByIdAndUpdate(_id, req.body).then(docs => {
      if (docs) {
        res.json({ success: true, data: req.body });
      }
      res.json({ success: false, data: docs });
    })

  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "userData error" });
  }
});

app.get("/api/userData", (req, res) => {
  // const _id = req.user._id;
  // console.log(_id);
  // User.findOne({ _id: _id })
  //   .then((data) => {
  //     res.json({ status: "ok", data: data });
  //   })
  //   .catch((error) => {
  //     res.json({ status: "error", data: error });
  //   });
  // try {
  //   const useremail = req.user.email;
  //   User.findOne({ email: useremail })
  //     .then((data) => {
  //       res.json({ status: "ok", data: data });
  //     })
  //     .catch((error) => {
  //       res.json({ status: "error", data: error });
  //     });
  // } catch (error) {
  //   console.log(error);
  //   res.json({ status: "error", error: "userData error" });
  // }
  res.json(res.body)
});






const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
