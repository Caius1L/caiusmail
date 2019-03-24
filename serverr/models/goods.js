var mongoose =require('mongoose')
var Schema=mongoose.Schema;
var productSchema= new Schema({
	"productId":String,
	"productName":String,
	"salePrice":Number,
	"productImage":String,
	"checked":String,
	"productNum":Number,
	"productUrl":String
});
module.exports=mongoose.model('Good',productSchema);
