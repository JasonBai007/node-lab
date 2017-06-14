var fs = require('fs');
var util = require('util');

var oldPath = 'picpool'
var newPath = 'targetfolder'

// 修改单个文件的路径和名称
// function changeOnePicName() {
//     fs.rename(oldPath + '/top.jpg', newPath + '/aaa.jpg', function(err) {
//         if (err) {
//             throw err;
//         }
//         console.log('done!');
//     })

// }
// changeOnePicName()


// 列出文件夹下的全部文件信息
function explorer(path) {
    fs.readdir(path, function(err, files) {
        //err 为错误 , files 文件名列表包含文件夹与文件
        if (err) {
            console.log('error:\n' + err);
            return;
        }

        files.forEach(function(file) {
            console.log('文件名:' + path + '/' + file);
        });

    });
}

explorer(oldPath);
