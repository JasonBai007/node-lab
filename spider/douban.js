var https = require('https');
var cheerio = require('cheerio');
var fs = require("fs");

var pageNum = 9;
var urls = [];

for (var i = 0; i <= pageNum; i++) {
    urls.push('https://beijing.douban.com/events/week-all?start='+i+'0');
}

urls.forEach(function(url) {
    handleData(url);    
})

function handleData(url) {
    https.get(url, function(res) {
        var html = '';

        res.on('data', function(chunk) {
            html += chunk
        })

        res.on('end', function() {
            var eventData = filterData(html);
            printIt(eventData);
        })
    }).on('error', function() {
        console.log('获取失败')
    })    
}

function filterData (html) {
    var $ = cheerio.load(html);
    var lists = $('.list-entry');

    var eventData = [];

    lists.each(function() {
        var feeString = $(this).find('.fee strong').text();
        if (feeString === '免费') {
            var title = $(this).find('.title').children('a').attr('title');
            var a = $(this).find('.title').children('a').attr('href');
            var item = {
                title: title,
                a:a
            }
            eventData.push(item);
        }        
    })

    return eventData;
}

function printIt (eventData) {
    var data = JSON.stringify(eventData);

    fs.writeFile('output.html', data, {flag:'a+'},  function(err) {
       if (err) {
           return console.error(err);
       }
    });
}