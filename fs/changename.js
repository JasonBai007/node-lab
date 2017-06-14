var fs = require('fs');

gen_buddle('dgadf');

// 列出文件夹下的全部文件信息
function gen_buddle(name) {

    // 读取src文件夹下面的所有文件
    fs.readdir(__dirname + '/src', function(err, files) {

        // 处理异常
        if (err) {
            console.log('error:\n' + err);
            return;
        }

        // 必须先创建目标文件夹路径，否则在下一步会抛出错误
        fs.mkdir(__dirname + '/dist/' + name, function(err) {
            if (err)
                throw err;
            console.log('厉害了，白总！创建目录成功！')
        });

        // 循环处理读到的这些文件，重命名并移动
        files.forEach(function(file, index) {
            var src = __dirname + '/src/' + file
            var dist = __dirname + '/dist/' + name + '/' + name + parseInt(index + 1) + '.jpg'

            // 重命名并移动
            fs.rename(src, dist, function(err) {
                if (err) {
                    throw err;
                }
                console.log('厉害了，白总！重命名并移动成功！');
            })
        });
    });
}
