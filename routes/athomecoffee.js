var express = require("express");
var router = express.Router();

router.use(express.json());

const athomecoffeeList  = [{
    Image: '../Assets/cafeverona.JPEG',
    ProductName: 'Cafe Verona',
    Price: 698
  },
  {
    Image: '../Assets/maplepecan.JPEG',
    ProductName: 'Maple Pecan',
    Price: 499
  },
  {
    Image: '../Assets/cafeverona.JPEG',
    ProductName: 'Cafe Verona',
    Price: 698
  },
  {
    Image: '../Assets/houseblend.JPEG',
    ProductName: 'House Blend',
    Price: 659
  }];

router.get("/athomecoffeelist", (req, res, next) => {
    res.send(athomecoffeeList);
});



module.exports = router;