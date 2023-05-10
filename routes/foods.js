var express = require("express");
var router = express.Router();

router.use(express.json());

const foodList  = [{
    Image: '../Assets/almondtart.jpg',
    ProductName: 'Almond Tart',
    Price: 189
  },
  {
    Image: '../Assets/baconsausage.jpg',
    ProductName: 'Bacon Sausage',
    Price: 149
  },
  {
    Image: '../Assets/banoffee.jpeg',
    ProductName: 'Banoffee',
    Price: 55
  },
  {
    Image: '../Assets/berrycake.jpeg',
    ProductName: 'Berry Cake',
    Price: 149
  },
  {
    Image: '../Assets/Breakfastsandwich.jpg',
    ProductName: 'Breakfast Sandwich',
    Price: 129
  },
  {
    Image: '../Assets/espressobrownie.png',
    ProductName: 'espresso Brownie',
    Price: 119
  },
  {
    Image: '../Assets/FusilliBolognese.png',
    ProductName: 'Fusilli Bolognese',
    Price: 199
  },
  {
    Image: '../Assets/hamtoast.jpeg',
    ProductName: 'Ham Toast',
    Price: 135
  },
  {
    Image: '../Assets/MeatballPasta.jpg',
    ProductName: 'Meatball Pasta',
    Price: 139
  },
  {
    Image: '../Assets/PennePestowithMushroom.jpg',
    ProductName: 'Panne Pestow with Mushroom',
    Price: 135
  },
  {
    Image: '../Assets/koreansausage.jpeg',
    ProductName: 'Korean Sausage',
    Price: 149
  },
  {
    Image: '../Assets/bagel.jpg',
    ProductName: 'Bagel',
    Price: 89
  }];

router.get("/foodslist", (req, res, next) => {
    res.send(foodList);
});



module.exports = router;