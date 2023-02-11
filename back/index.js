const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const authenticateJWT = require("./middleware/index");
const asynchHandler = require("express-async-handler");
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

app.post("/api/updateUserData", authenticateJWT, async (req, res) => {
  const user = await User.findById(req.user.id);

  console.log(req.user);

  // try {
  //   const useremail = req.body;
  //   User.findOne({ email: useremail })
  //     .then((data) => {
  //       res.send({ status: "ok", data: data });
  //     })
  //     .catch((error) => {
  //       res.send({ status: "error", data: error });
  //     });
  // } catch (error) {
  //   console.log(error);
  //   res.json({ status: "error", error: "userData error" });
  // }
  // if (user) {
  //   user.email = req.body.email || user.email;
  //   const updateUser = await user.save();
  //   res.json({
  //     fname: updateUser.fname,
  //     lname: updateUser.lname,
  //   });
  // } else {
  //   res.status(401);
  //   throw new Error("User Not found");
  // }
  User.findById(req.user.id, function (err, user) {
    // todo: don't forget to handle err

    if (!user) {
      req.flash("error", "No account found");
      // return res.redirect('/edit');
    }

    // good idea to trim
    // var email = req.body.email.trim();
    // var username = req.body.username.trim();
    // var firstname = req.body.firstname.trim();
    // var lastname = req.body.lastname.trim();
    var fname = req.body.fname.trim();
    var lname = req.body.fname.trim();

    // validate

    // no need for else since you are returning early ^
    user.fname = fname;
    user.lname = lname;

    // don't forget to save!
    user.save(function (err) {});
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
