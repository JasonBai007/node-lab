var q = require('querystring');

var obj = {
    ie:'utf-8',
    newi:1,
    mod:1,
    isbd:1,
    isid:'df7d1eec00000292',
    wd:'node.js',
    rsv_spt:1
}

console.log(q.stringify(obj));
console.log(q.stringify(obj,','));
console.log(q.stringify(obj,',',':'));