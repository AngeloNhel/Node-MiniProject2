var express = require("express");
var router = express.Router();

router.use(express.json());

const Users = [{ firstName:"Angelo Nhel", lastName:"Acibar",email: "gelogigs14@gmail.com", password: "pass1234"}];

router.get("/", (req, res, next) => {
    res.send(Users);
});

router.post('/JoinNow', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (firstName && lastName && email && password) {
    const newUser = { firstName, lastName, email, password };
    Users.push(newUser);
    res.status(201).send('User signed up successfully.');
  } else {
    res.status(400).json({ success: false, message: 'All fields are required.' });
  }
});


router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = Users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;