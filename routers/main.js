var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'})
router.get('/', function(req, res, next) {
	res.render('index', {id:'7143783'});
});
router.post('/upload', upload.single('file'), function(req,res) {
	console.log(req.file);
	console.log(req.body);
	res.send({
		err:0
	})
});

module.exports = router;