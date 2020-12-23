const express = require('express');
const router = express.Router();
const Design = require("./../model/design");
router.get('/getDesign', (req, res, next) => {
  Design.find({}, function (err, results) {
    res.json({
      status: 0,
      results: results
    });
  });
})

module.exports = router;