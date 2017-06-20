var url = require('url');

var testUrl = 'http://www.imooc.com:8080/course/list?c=fe&sort=last'

var obj = url.parse(testUrl);
var obj2 = url.parse(testUrl, true);

console.log(url);
console.log(obj);
console.log(obj2);

/*
以下是打印结果：可以看到query字段不一样

官网解释：
parseQueryString <boolean> 
如果为 true，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象。 
如果为 false，则返回的 URL 对象上的 query 属性会是一个未解析、未解码的字符串。 
默认为 false。

{ 
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url] 
}

Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com:8080',
  port: '8080',
  hostname: 'www.imooc.com',
  hash: null,
  search: '?c=fe&sort=last',
  query: 'c=fe&sort=last',
  pathname: '/course/list',
  path: '/course/list?c=fe&sort=last',
  href: 'http://www.imooc.com:8080/course/list?c=fe&sort=last' }
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com:8080',
  port: '8080',
  hostname: 'www.imooc.com',
  hash: null,
  search: '?c=fe&sort=last',
  query: { c: 'fe', sort: 'last' },
  pathname: '/course/list',
  path: '/course/list?c=fe&sort=last',
  href: 'http://www.imooc.com:8080/course/list?c=fe&sort=last' }
 */
