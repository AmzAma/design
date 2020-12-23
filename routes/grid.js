const express = require('express');
const router = express.Router();
const Grid = require("./../model/grid");
router.get('/getGrid', (req, res, next) => {
  Grid.find({}, function (err, results) {
    res.json({
      status: 0,
      results: results
    });
  });
})



module.exports = router;