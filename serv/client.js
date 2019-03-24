var http=require('http');
http.get('https://www.imooc.com',function(res){
 let data='';
 res.on("data",function(chunk){
 data +=chunk;
 });
 res.on("end",function(){
 	let result=JSON.parse(data);
 	console.log(result.msg);
 })
})