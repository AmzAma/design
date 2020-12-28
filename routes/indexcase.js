const express = require('express');
const router = express.Router();
const IndexCase = require("./../model/indexcase");
router.get('/getIndexCase', (req, res, next) => {
  IndexCase.find({}, function (err, results) {
    res.json({
      status: 0,
      results: results
    }); 
  });
})



module.exports = router;