
/*
 * GET home page.
 */

exports.index = function(req, res){
console.log(res);
  res.render('index', { title: 'Express' });
};