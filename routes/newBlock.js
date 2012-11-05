var TextBlock = require("../modules/textBlock").TextBlock;
/*
 * GET home page.
 */
var textBlock = new TextBlock();
exports.newBlock = function(req, res){
  	textBlock.save([
	{title: req.param('title'),
	body: req.param('body')},function(error, text){
		res.redirect('viewAll', { title: 'Express', data:text })
	}]);
};

exports.showView = function(req, res){
  	res.render('new', {title: 'Express'});
};