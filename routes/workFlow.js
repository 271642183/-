var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('workFlow');
});

router.get('/:postId', function(req, res) {
	var postId = parseInt(req.params.postId);
	var post = result.filter( post => {
		if(post.id == postId){
			res.render('case', {
  				post: post
  			});
			return
		}
	});
});

module.exports = router;