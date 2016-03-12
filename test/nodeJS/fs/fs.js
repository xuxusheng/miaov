/**
 * Created by 许盛 on 2016/3/10.
 */

//fs.open(path,flags,[mode],callback)
//--异步版的打开一个文件
//
//fs.openSync(path,flags,[mode])
//--fs.open()的同步版
//
//fs.read(fd,buffer,offset,length.position,callback)
//--从指定的文档标识符fd读取文件数据
//
//fs.readSync(fd,buffer,offset,length,position)
//--fs.read函数的同步版本，返回bytesRead的个数

//var fs = require('fs');
/**
 *  fs.open(path,flags,[mode],callback)
 *  path: 要打开的文件路径
 *  flags: 打开文件的方式，读/写
 *  mode: 设置文件的模式 读/写/执行 4/2/1
 *  callback: 回调
 *      err: 文件打开失败的错误保存在err里面，如果成功err为null。
 *      fd: 被打开文件的标识，和timer = setInterval（）里的timer作用差不多
 **/

var fs = require('fs');
fs.open('1.txt','r',function(err,fd){
    console.log(err);
    console.log(fd);
});

fs.open('1.txt','r',function(err,fd){
    console.log(fd); //变成了4
});
















