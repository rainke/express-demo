var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {id:'7143783'});
});

module.exports = router;