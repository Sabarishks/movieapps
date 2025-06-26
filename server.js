const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

app.get('/Home' ,(req, res) =>{
      res.send("Welcome to the page");
})


mongoose.connect('mongodb+srv://sabarishkssampath:987654321@movieapp.c5me2sj.mongodb.net/?retryWrites=true&w=majority&appName=movieapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
 