var mongoose =require('mongoose')
var Schema=mongoose.Schema;
var styleSchema= new Schema({
	"styleId":String,
	"styleName":String,
	"stylecss":Number,
	"styleImage":String,
	"checked":String,
	"styleNum":Number
});
module.exports=mongoose.model('Style',styleSchema);
