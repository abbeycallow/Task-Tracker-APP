var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

//this is where i'm adding my other routes for my page (home, userlist, usertable)

/* GET ADD USER page. */
router.get('/adduser', function(req, res, next) {
  res.render('adduser', { title: 'tracker app' });
});

/* GET USER LIST page. */
router.get('/userlist', function(req, res, next) {
  res.render('userlist', { title: 'user list' });
});

/* GET user info page. */
router.get('/userinfo', function(req, res, next) {
  res.render('userinfo', { title: 'user info' });
});

/* GET user info page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about it' });
});

/* GET user info page. */
router.get('/viewprofile', function(req, res, next) {
  res.render('viewprofile', { title: 'view profilet' });
});

module.exports = router;
