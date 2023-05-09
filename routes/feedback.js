var express = require("express");
var router = express.Router();

router.use(express.json());

const Users = [{email: "yvonne@gmail.com", feedback:"it was good"}];

router.get("/", (req, res, next) => {
    res.send(Users);
});

router.post('/JoinNow', (req, res) => {
  const {email,feedback} = req.body;
  if (email && feedback) {
    const newUser = {email, feedback};
    Users.push(newUser);
    res.status(201).send('User signed up successfully.');
  } else {
    res.status(400).json({ success: false, message: 'All fields are required.' });
  }
});


module.exports = router;