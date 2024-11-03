const express = require("express");
const app = express();
const path = require('path');
const connection  = require("./connection/conccection.js");
const { signup, login, updatePassword } = require("./controller/userController.js");
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

connection();

app.use(cors({
  origin: '*',
  credentials: true
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});

app.get("/forgotPassword", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'forgot.html'));
});

app.post('/api/auth/signup', signup);
app.post('/api/auth/login', login);
app.post('/api/auth/forgotPassword',updatePassword)


const port = process.env.PORT || 4000;
app.listen(port, () => {    
  console.log(`Server is running at http://localhost:${port}`);
});