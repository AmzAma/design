const express = require('express');
const router = express.Router();
const Message = require("./../model/message");
router.get('/getMessage', (req, res, next) => {
  Message.find({}, function (err, results) {
    res.json({
      status: 0,
      results: results
    });
  });
})

module.exports = router;