var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hi', function(req, res, next) {
  res.send('hi');
});
