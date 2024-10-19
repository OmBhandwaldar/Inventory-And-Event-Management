const express = require('express');
const zod = require('zod');
import { User, Inventory, Event } from '../db';
import { authenticate } from '../middleware';
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();

const signupSchema = zod.object({
    email: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6),
    role: zod.string(),
    prn: z.string().optional() // PRN is optional by default
})
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

router.post("/signup", async(req, res)=>{
    const body = req.body;
    console.log('req.body', body);
    const {success} = signupSchema.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Invalid inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if(user._id){
        return res.status(411).json({
            message: "Email already taken(User already exists)"
        })
    }


    const newUser = await User.create(body);
    const token = jwt.sign({
        userId: newUser._id
    }, JWT_SECRET)

    res.json({
        message: "User created successfully.",
        token: token
    })
});

function userExists(email, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    let userExists = false;
    const user = User.findOne({
        email,
        password
    })
    // const user = User.findOne({
    //     email: req.body.email,
    //     password: req.body.password
    // })
    if(user){
        userExists = true;
    } 
    return userExists;
}

router.post("/signin", async(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    if(!userExists(email, password)){
        return res.status(403).json({
            msg: "Error while logging in",
        })
    }

    var token = jwt.sign({email: email}, JWT_SECRET);

    return res.json({
        token
    })
});

