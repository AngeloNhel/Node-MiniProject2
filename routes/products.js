var express = require("express");
var router = express.Router();

router.use(express.json());

const productList  = [
  {
    Image: '../Assets/cafemocha.jpg',
    ProductName: 'Cafe Mocha',
    Price: 120
  },
  {
    Image: '../Assets/caramelfrappe.jpg',
    ProductName: 'Caramel Frappe',
    Price: 119
  },
  {
    Image: '../Assets/caramelmacchiato.jpg',
    ProductName: 'Caramel Macchiato',
    Price: 99
  },
  {
    Image: '../Assets/coffeejelly.jpg',
    ProductName: 'Coffe Jelly',
    Price: 115
  },
  {
    Image: '../Assets/coldbrew.jpg',
    ProductName: 'Cold Brew',
    Price: 199
  },
  {
    Image: '../Assets/hibiscuslemonade.png',
    ProductName: 'Hibiscus Lemonade',
    Price: 78
  },
  {
    Image: '../Assets/icedmatchaespresso.png',
    ProductName: 'Ice Matcha Espresso',
    Price: 98
  },
  {
    Image: '../Assets/javachip.jpg',
    ProductName: 'Java Chip',
    Price: 69
  },
  {
    Image: '../Assets/matcha.jpg',
    ProductName: 'Matcha',
    Price: 89
  },
  {
    Image: '../Assets/pumpkinspicelatte.JPG',
    ProductName: 'Pumpkin Spice Latte',
    Price: 169
  },
  {
    Image: '../Assets/bluerasberry.jpeg',
    ProductName: 'Blue Rasberry',
    Price: 177
  },
  {
    Image: '../Assets/caramelmacchiato.jpg',
    ProductName: 'Caramel Macchiato',
    Price: 177
  }];

router.get("/productlist", (req, res, next) => {
    res.send(productList);
});



module.exports = router;