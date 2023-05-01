var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'About Us' });
});

/* GET scraper page. */
router.get('/scraper', function(req, res, next) {
  res.render('scraper', { title: 'Web Scraper' });
});

/* GET similarity checker page. */
router.get('/checker', function(req, res, next) {
  res.render('checker', { title: 'Similarity Checker' });
});

/* GET web scraper results page. */
router.get('/results', function(req, res, next) {
  res.render('results', { title: 'Web Scraper Results' });
});

module.exports = router;
