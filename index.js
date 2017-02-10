
var hello=require("./module");
var request=require("request");
var cheerio=require("cheerio");

hello.sayHello('Mike');
hello.ok(8);
console.log(hello.squared(5));

/*
request.get("http://facebook.com", function(err, res, body){
  console.log(`facebook.com is ${body.length/1024}`);
});

request.get("http://nytimes.com", function(err, res, body){
  //console.log(`facebook.com is ${body.length/1024}`);
  var $=cheerio.load(body);
  console.log($('h1,h2,h3,h4,h5').text());
});
*/