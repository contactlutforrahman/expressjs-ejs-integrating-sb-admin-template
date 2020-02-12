var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var people = [
    {
      id: 101,
      name: 'Lutfor Rahman',
      email: 'contact.lutforrahman@gmail.com'
    },

    {
      id: 102,
      name: 'Vrushang',
      email: 'info@vrushang.com'
    },

    {
      id: 103,
      name: 'Frank',
      email: 'info@frank.com'
    },

    {
      id: 104,
      name: 'Felix',
      email: 'info@felix.com'
    }
  ];
  res.render('index', { title: 'my Universe', people : people });
});

/* POST home page. */
router.post('/post-form', function(req, res, next) {
  res.res('Hello');
});

module.exports = router;
