var TextBlock = require('../modules/textBlock').TextBlock;
/*
 * GET home page.
 */
var textBlock = new TextBlock();
exports.newBlock = function(req, res){
  	textBlock.save([{
	title: req.param('title'),
	body: req.param('body')}],
	function(error, text){
		if(error){
			res.render('404', {title: '404', error: error});
		}
		else{
			res.redirect('/viewAll');
		}
		
	});
};

exports.newComment = function(req, res){
	textBlock.findById(req.params.id, function(err, result){
		var resultArr = [result]
		res.render('viewAll', { title: 'Express', data: resultArr })
	});
}

exports.showView = function(req, res){
  	res.render('new', {title: 'Express'});
};

exports.showPost = function(req, res){
	
}