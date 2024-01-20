const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'axcjkasfjkhkhkjhjgjsfdk';
const app = express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieparser());

mongoose.connect('mongodb+srv://vishuBlog:FDagOgVkEAFX2d5A@cluster0.tt8eis7.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
   try {
    const userDoc =  await User.create({
        username, 
        password:bcrypt.hashSync(password, salt),
    });
    // res.json({requestData:{username, password}});
    res.json(userDoc);
   } catch (e) {
    console.log("this is register error",e);
    res.status(400).json(e);
   }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.findOne({ username });
        if (!userDoc) {
            return res.status(400).json("User not found");
        }
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            const token = jwt.sign({ username, id: userDoc._id }, secret, {});
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        } else {
            res.status(400).json("Wrong credentials");
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            res.status(401).json({ error: 'Unauthorized' });
        } else {
            res.json(info);
        }
    });
});

app.post('/logout', (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'strict', 
        });
        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(4000);


// FDagOgVkEAFX2d5A
