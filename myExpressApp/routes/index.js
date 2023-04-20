var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'About Us' });
});

router.get('/scraper', function(req, res, next) {
  res.render('scraper', { title: 'Web Scraper' });
});

router.get('/checker', function(req, res, next) {
  res.render('checker', { title: 'Similarity Checker' });
});

module.exports = router;
