var http = require('http');

var querystring = require('querystring');

var postData = querystring.stringify({
    content:'期待以后的课程',
    cid:759
});

var options = {
    hostname:'www.imooc.com',
    path:'/course/docomment',
    port: 80,
    method:'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=10799208-e4f9-46b7-9bed-a6e3ff388849; imooc_isnew_ct=1476343982; loginstate=1; apsid=ljMWVmZTkyODIwZGZhMThmOTE5YzFmZTc3M2I0ZjUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjYwMTkzMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABieXlna2NnQDE2My5jb20AAAAAAAAAAAAAAAAAAAAAAGU1OTJlNDhhODNkYmVhNzEzYjY2ZWE3NjI1OWRlMjg5EiUkWBIlJFg%3DMz; last_login_username=byygkcg%40163.com; PHPSESSID=2f616cp36l5ks11cku2n4va656; jwplayer.volume=85; imooc_isnew=2; cvde=5840c4a855e27-28; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1480552925,1480571328,1480579142,1480639585; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1480642831',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/759',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options,function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })

    res.on('end', function() {
        console.log('评论完毕');
    })
})

req.on('error', function(e) {
    console.log(e.message);
})

req.write(postData);

req.end()