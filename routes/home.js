const express = require('express');
const router = express.Router();
const Home = require("./../model/home");
router.get('/getBanner', (req, res, next) => {
  Home.find({}, function (err, results) {
    res.json({
      status: 0,
      results: results
    });
  });
})

module.exports = router;