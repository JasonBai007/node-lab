let fs = require('fs');

// 批量整理图片函数
let gen_buddle = function(input_name) {

    // 首尾去whitespace，非常重要，否则下面的创建路径步骤将失败
    let name = input_name.trim();

    // 读取src文件夹下面的所有文件
    fs.readdir(__dirname + '/src', function(err, files) {

        // 处理异常
        if (err) {
            console.log('悲剧了！创建目录失败');
            return;
        }

        // 必须先创建目标文件夹路径，否则在下一步会抛出错误
        fs.mkdir(__dirname + '/dist/' + name, function(err) {
            if (err) {
                throw err;
            }
            console.log('厉害了！创建目录成功')
        });

        // 循环处理读到的这些文件，重命名并移动
        files.forEach(function(file, index) {

            // 构建输入输出路径
            let src = __dirname + '/src/' + file
            let dist = __dirname + '/dist/' + name + '/' + name + parseInt(index + 1) + '.jpg'

            // 重命名并移动
            fs.rename(src, dist, function(err) {
                if (err) {
                    throw err;
                }
                console.log(`厉害了！重命名并移动成功 ${index}`);
            })
        });
    });
}

// 输入姓名并处理图片，入口函数
inputName(gen_buddle);

// 获取输入的图片名
function inputName(cb) {

    console.log('请输入图片名：');

    process.stdin.setEncoding('utf8');

    //输入进入流模式（flowing-mode，默认关闭，需用resume开启），注意开启后将无法read到数据
    //见 https://github.com/nodejs/node-v0.x-archive/issues/5813
    process.stdin.resume();

    process.stdin.on('data', function(chunk) {
        console.log('主人，我开始工作了!');

        //去掉下一行可一直监听输入，即保持标准输入流为开启模式
        // process.stdin.pause();
        cb(chunk);
    });
}
