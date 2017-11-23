var express = require('express');
var router = express.Router();
const path = require('path');
var fs = require('fs');

var file = path.join("./public/js/workClass.json")
var result = JSON.parse(fs.readFileSync(file)).data;

router.get('/', function(req, res) {

  res.render('workClass',{
  		post: result
  });
});

/*router.get('/:postId', function(req, res) {
	var postId = parseInt(req.params.postId);
	var post = result.filter( post => {
		if(post.id == postId){
			res.render('workClass', {
  				post: post
  			});
			return
		}
	});
});
*/
module.exports = router;