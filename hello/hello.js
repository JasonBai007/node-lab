/*第一行请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。

接下来我们调用http模块提供的函数： createServer 。
这个函数会返回一个对象，
这个对象有一个叫做 listen 的方法，
这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。*/

/*request 和 response 它们是对象，
你可以使用它们的方法来处理HTTP请求的细节，
并且响应请求（比如向发出请求的浏览器发回一些东西）

所以我们的代码就是：
当收到请求时，使用 response.writeHead() 函数发送一个HTTP状态200和HTTP头的内容类型（content-type），
使用 response.write() 函数在HTTP相应主体中发送文本“Hello World"。
最后，我们调用 response.end() 完成响应。*/

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Nodejs');
    res.end()
}).listen(2017)
