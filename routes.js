const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const route = express();
const verifyToken = require('./midleware');
route.use(express.json());
require('dotenv').config();
//signup route
route.post('/signup', async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
           return res.status(500).json({ error: 'user already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, password:hashedPassword, email });
        await newUser.save();
         res.status(201).json({ message: 'sucessfully signup' });
    }
    catch (err) {
        console.error('signup error', err);
        res.status(500).json({ error: 'signup failed' });
    }
});

//Login Route

route.post('/login', async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'invalid credential' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'invalid credential' });
        }
        const token = jwt.sign(
          { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
          {expiresIn:'1h'}
        );
        res.status(200).json({ message: 'Login successful' , token:token});
    } catch (err) {
        console.error("login error", err);
        res.status(500).json({ error: "login failed" });
    }
});
route.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "This is protected data",
    user: req.user,
  });
});

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("mongoodb is running...");
    })
    .catch((err) => {
        console.error('mongoodb connection error', err);
    });

route.listen(3000, () => {
    console.log('Server is running');
});