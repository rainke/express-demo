var express = require('express');
var router = express.Router();


router.get(['/user', '/'], function(req, res, next) {
	res.send('api-user');
});
router.put('/user', function(req, res) {
  console.log(req.body)
	res.send({
		err:'0'
	})
})
router.all('*', function(req, res, next) {
	res.send('i don\'t konw what you want to do!');
})
module.exports = router;