const express = require('express');
const router = express.Router();
const Question = require("./../model/question");
router.get('/getQuestion', (req, res, next) => {
  Question.find({}, function(err, results) {
    res.json({
      status: 0,
      results: results
    });
  });
})

module.exports = router;