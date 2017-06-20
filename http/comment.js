/*
需要配置的地方：
postData.mid
options.headers.Cookie
options.headers.Referer
 */


let http = require('http');
let querystring = require('querystring');

const postData = querystring.stringify({
    content:'期待以后的课程',
    mid:15152
});

let options = {
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
        'Cookie':'PHPSESSID=2lt70vrnan9llfecak88914bu0; imooc_uuid=e678cd92-6b0c-487e-b35f-c2f19a2663bf; imooc_isnew=1; imooc_isnew_ct=1497920526; loginstate=1; apsid=ljMWVmZTkyODIwZGZhMThmOTE5YzFmZTc3M2I0ZjUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjYwMTkzMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABieXlna2NnQDE2My5jb20AAAAAAAAAAAAAAAAAAAAAADFlN2YxOWY1MjlmMTk2YTk2YmQ4NTA1MmIxZTg5ZGVmEMxIWRDMSFk%3DMz; last_login_username=byygkcg%40163.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1497920526; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1497943075; cvde=5948740ebe533-67',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/15152',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

let req = http.request(options,function(res) {
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