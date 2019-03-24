var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userId":String,
  "userName":String,
  "userPwd":String,
  "orderList":Array,
  "cartList":[
    {
      "productId":String,
      "productName":String,
      "salePrice":String,
      "productImage":String,
      "checked":String,
      "productNum":String
    }
  ],
  "addressList":[
    {
      "addressId": String,
      "userName": String,
      "streetName": String,
      "postCode": Number,
      "tel": Number,
      "isDefault": Boolean
    }
  ],
  "styleList":[
    {
        "styleId" : String,
        "styleName" : String,
        "stylecss" : String,
        "styleImage" : String,
        "checked" : Number,
        "styleNum" : String,
        "tips":String
   }
  ],
});

module.exports = mongoose.model("User",userSchema);
