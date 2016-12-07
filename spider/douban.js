var https = require('https');
var cheerio = require('cheerio');
var fs = require("fs");

var pageNum = 9;
var urls = [];

for (var i = 0; i <= pageNum; i++) {
    var url = 'https://beijing.douban.com/events/week-all?start='+i+'0';
    handleData(url);
}

function handleData(url) {
    https.get(url, function(res) {
        var html = '';

        res.on('data', function(chunk) {
            html += chunk
        })

        res.on('end', function() {
            printIt(html);
        })
    }).on('error', function() {
        console.log('获取失败')
    })    
}

function printIt (eventData) {
    fs.writeFile('output.html', eventData, {flag:'a+'},  function(err) {
       if (err) {
           return console.error(err);
       }
    });
}