/*const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('home');
});
router.get('/:name', function (req, res) {
  res.render(req.params.name);
});

module.exports = router;*/
module.exports = function(app){
	app.get('/', function (req, res){
		res.redirect('/home');
	});
	app.use('/home', require('./home'));
	app.use('/cases', require('./case'));
	app.use('/workFlow', require('./workFlow'));
  app.use('/workClass', require('./workClass'));
  app.use('/about', require('./about'));
	// 404 page
  	app.use(function (req, res) {
    	if (!res.headersSent) {
    		console.log(res.headersSent);
     	 res.status(404).render('404');
    	}
  	});
}