var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Гипнофобия', number: '123123123' });
});

module.exports = router;
