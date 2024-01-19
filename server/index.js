const express = require('express');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://vishuBlog:FDagOgVkEAFX2d5A@cluster0.tt8eis7.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
   try {
    const userDoc =  await User.create({username, password});
    // res.json({requestData:{username, password}});
    res.json(userDoc);
   } catch (e) {
    res.status(400).json(e);
   }
})

app.listen(4000);


// FDagOgVkEAFX2d5A
