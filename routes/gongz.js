const express = require('express');
const router = express.Router();
const Gongz = require("./../model/gongz");
router.get('/getGongz', (req, res, next) => {
  Gongz.find({}, function (err, results) {
    res.json({
      status: 0,
      results: results
    }); 
  });
})



module.exports = router;