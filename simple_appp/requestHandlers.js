var querystring = require("querystring");
var fs = require('fs');

function start(response, postData) {
    console.log("Request handler 'start' was called.");

    fs.readFile('./index.html', "binary", function(err, file) {
        if (err) {
            response.writeHead(500, {'Content-Type': 'text/plain' });
            response.write('<h1>Sorry, Server Error</h1>');
            response.end(err);
        } else {            
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(file, "binary");
            response.end();
        }
    });
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("You've sent the text: " +
        querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;
