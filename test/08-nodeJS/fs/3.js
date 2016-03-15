
//fs.write(fd,buffer,offset,length[,position],callback)
//--通过文件标识fd，向指定的文件中写入buffer

//fs.write(fd,data[,position[,encoding]],callback)
//--把data写入到文档中通过指定的fd，如果data不是buffer对象的实例则会把值强制转化成一个字符串

//fs.writeSync(fd,buffer,offset,length[,position])
//--fs.write()的同步版本

//fs.writeSync(fd,data[,position[,encoding]])
//--fs.write()的同步版本

//fs.close(fd,callback)
//--关闭一个打开的文件

//fs.closeSync(fd)
//--fs.close()的同步版本

//fs.write(fd,buffer,offset,length[,position],callback)
//fd: 打开的文件
//buffer: 要写入的数据
//offset: buffer对象中要写入的数据的起始位置
//length: 要写入的buffer数据的长度
//position: fd中的起始位置
//callback: 回调

var fs = require('fs');
fs.open('1.txt','w',function(err,fd){
    if(err){

    }else{
        var bf = new Buffer('123');
        fs.write(fd,bf,0,3,0,function(err,len,newBf){
            console.log(arguments);
        });
        fs.write(fd,'1234567',5,'utf-8');
        fs.close(fd,function(){
            console.log("关闭成功");
        });
    }
});














