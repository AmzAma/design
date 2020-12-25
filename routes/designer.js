const express = require('express');
const router = express.Router();
const Designer = require("../model/designer");
router.get('/getDesigner', (req, res, next) => {
  Designer.find({}, function (err, results) {
    res.json({
      status: 0,
      results: results
    });
  });
})

module.exports = router;