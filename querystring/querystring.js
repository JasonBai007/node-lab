var q = require('querystring');

var obj = {
    ie: 'utf-8',
    newi: 1,
    mod: 1,
    isbd: 1,
    isid: 'df7d1eec00000292',
    wd: 'node.js',
    rsv_spt: 1
}

console.log(q.stringify(obj));
console.log(q.stringify(obj, ','));
console.log(q.stringify(obj, ',', ':'));

/*
querystring (查询字符串)
querystring 模块提供了一些实用工具，用于解析与格式化 URL 查询字符串。

querystring.escape(str)
querystring.parse(str[, sep[, eq[, options]]])
querystring.stringify(obj[, sep[, eq[, options]]])
querystring.unescape(str)

以下是打印结果：
ie=utf-8&newi=1&mod=1&isbd=1&isid=df7d1eec00000292&wd=node.js&rsv_spt=1
ie=utf-8,newi=1,mod=1,isbd=1,isid=df7d1eec00000292,wd=node.js,rsv_spt=1
ie:utf-8,newi:1,mod:1,isbd:1,isid:df7d1eec00000292,wd:node.js,rsv_spt:1

*/
