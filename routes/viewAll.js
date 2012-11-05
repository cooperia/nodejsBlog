var TextBlock = require("../modules/textBlock").TextBlock;
/*
 * GET home page.
 */
var textBlock = new TextBlock();
exports.viewAll = function(req, res){
  	textBlock.findAll(function(e, text){
		if(e){
			console.log("There was an error");
		}
		res.render('viewAll', { title: 'Express', data: text });
	});
};