var textBlockCounter = 1;

TextBlock = function(){};
TextBlock.prototype.dummyData = [];

TextBlock.prototype.findAll = function(callback) {
  callback( null, this.dummyData )
};

TextBlock.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  callback(null, result);
};

TextBlock.prototype.save = function(textBlocks, callback) {
  var textBlock = null;

  if( typeof(textBlocks.length)=="undefined")
    textBlocks = [textBlocks];

  for( var i =0;i< textBlocks.length;i++ ) {
    textBlock = textBlocks[i];
    textBlock._id = textBlockCounter++;
    textBlock.created_at = new Date();

    if( textBlock.comments === undefined )
      textBlock.comments = [];

    for(var j =0;j< textBlock.comments.length; j++) {
      textBlock.comments[j].created_at = new Date();
    }
    this.dummyData[this.dummyData.length]= textBlock;
  }
  callback(null, textBlocks);
};

/* Lets bootstrap with dummy data */
new TextBlock().save([
  {title: 'Post one', body: 'Body one', comments:[{author:'Bob', comment:'I love it'}, {author:'Dave', comment:'This is rubbish!'}]},
  {title: 'Post two', body: 'Body two'},
  {title: 'Post three', body: 'Body three'}
], function(error, textBlocks){});

exports.TextBlock = TextBlock;