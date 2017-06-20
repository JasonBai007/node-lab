var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {

    	// 下面两行代码监测路由变化
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // 执行传入的route函数
        route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
