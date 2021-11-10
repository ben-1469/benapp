var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.id = req.params.id;
  //const result = users.find((v) => v.id === id);

  //res.json(result);
});

module.exports = router;
