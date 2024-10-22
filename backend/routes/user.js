
const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const express = require('express');
const zod = require('zod');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const router = express.Router();

require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;



const signupSchema = zod.object({
  email: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(6),
  role: zod.string(),
  prn: zod.string().optional(), // PRN is optional by default
});
// .refine(data => {
//     // Check if role is 'student' and PRN is provided
//     if (data.role === 'student' && !data.PRN) {
//         return false; // Validation fails
//     }
//     return true; // Validation passes
// }, {
//     message: "PRN is required when role is 'student'",
//     path: ["PRN"], // Path to the error
// });

router.post("/signup", async (req, res) => {
  const body = req.body;
  console.log("req.body", body);
  const { success } = signupSchema.safeParse(req.body);


  if (!success) {
    return res.status(411).json({
      message: "Invalid inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

    // const user = User.findOne({
    //     username: body.username
    // })

    // if(user._id){
    //     return res.status(411).json({
    //         message: "Email already taken(User already exists)"
    //     })
    // }


  if (user._id) {
    return res.status(411).json({
      message: "Email already taken(User already exists)",
    });
  }


  const newUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: newUser._id,
    },
    JWT_SECRET
  );

    // const newUser = await User.create(body);
    // const JWT_SECRET = 'asdfsdfsdf'
    const token = jwt.sign({
        userId: 'sdfsdf877UJbbhb'
    }, JWT_SECRET)


  res.json({
    message: "User created successfully.",
    token: token,
  });
});

function userExists(email, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false;
  const user = User.findOne({
    email,
    password,
  });

  // const user = User.findOne({
  //     email: req.body.email,
  //     password: req.body.password
  // })
  if (user) {
    userExists = true;
  }
  return userExists;
}
// const userSearch = async (email) => {
//   const user = await User.findOne({
//     email,
//   });
//   console.log(user.email);
//   if (user) {
//     return user.role;
//   }
//   return null;
// };
router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!userExists(email, password)) {
    return res.status(403).json({
      msg: "Error while logging in",
    });
  }
  const user = await User.findOne({ email, password });
  role = user.role;
  var token = jwt.sign({ email: email, role: role }, JWT_SECRET);
  //   var role = userSearch(email);
  return res.json({
    token,
    role,
    email,
  });
});

module.exports = router;
