var url = require('url');

var testUrl = 'http://www.imooc.com:8080/course/list?c=fe&sort=last'

var obj = url.parse(testUrl);
var obj2 = url.parse(testUrl,true);

console.log(url);
console.log(obj);
console.log(obj2);