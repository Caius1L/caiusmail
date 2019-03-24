var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Style=require('./../models/cailiao')



router.get("/getstyle",function(req,res,next){
	let params={};
	let styleModel= Style.find(params);
    StyleModel.exec(function(err,doc){
        if(err){
        res.json({
            status:'1',
            msg:err.message,
        });
    }else{
        if(doc){
            res.json({
                status:'1',
                msg:'',
                result:doc
            });
        }
    }
  })
})
module.exports = router