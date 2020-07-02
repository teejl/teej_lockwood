var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TeeJ Lockwood' });
});

router.post('/contact_me', function(req, res, next){
  console.log(req.body);
  res.send('');
});

module.exports = router;
