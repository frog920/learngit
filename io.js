'use strict';

var fs = require('fs');
//var fs1 = require('fs');

/**
 * 同步IO读取操作，可以捕获异常
 */
// try{
//     var data = fs.readFileSync('data.txt', 'utf-8');
// } catch(err){
//     console.log(data);
// }

/**
 * 读取流文件（图片）
 */
// fs.readFile('sample.jpg', function (err, data) {
//     console.log('异步操作开始')
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         //var text = data.toString('utf-8');
//         //console.log(text);
//         console.log(data.length + ' bytes');
//     }
// });

/**
 * 写入文件 Demo
 */

// var data = 'Hello, Node.js';
// fs.writeFile('output.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });

/**
 * stat函数获取文件、文件夹的信息
 * 异步操作
 */


// fs.stat('data.txt', function (err, stat) {
//     if (err) {
//         console.log(err);
//     } else {
//         // 是否是文件:
//         console.log('isFile: ' + stat.isFile());
//         // 是否是目录:
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             // 文件大小:
//             console.log('size: ' + stat.size);
//             // 创建时间, Date对象:
//             console.log('birth time: ' + stat.birthtime);
//             // 修改时间, Date对象:
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// });

/**
 * 流 strem 的pipe操作
 */

var rs = fs.createReadStream('data.txt');
// 流的读取操作
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});
rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

// 流的写操作
var ws = fs.createWriteStream('data1.txt');
ws.end();
rs.pipe(ws);