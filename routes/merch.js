var express = require("express");
var router = express.Router();

router.use(express.json());

const foodList  = [{
    Image: '../Assets/img1.jpg',
    Price: 189
  },
  {
    Image: '../Assets/img2.png',
    Price: 149
  },
  {
    Image: '../Assets/img3.JPG',
    Price: 55
  },
  {
    Image: '../Assets/img4.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img6.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img7.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img8.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img9.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img10.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img11.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img12.JPEG',
    Price: 149
  },
  {
    Image: '../Assets/img13.JPEG',
    Price: 149
  },
  {
    Image: '../Assets/img14.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img15.jpg',
    Price: 149
  },
  {
    Image: '../Assets/img5.jpg',
    Price: 89
  }];

router.get("/", (req, res, next) => {
    res.send(foodList);
});



module.exports = router;