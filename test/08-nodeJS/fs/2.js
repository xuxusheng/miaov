var fs = require('fs');

fs.open('1.txt','r',function(err,fd){
    if(err){
        console.log('文件打开失败');
    }else{
    //    读取文件
        var bf1 = new Buffer('123456789');
        console.log(bf1);
        fs.read(fd,bf1,0,4,null,function(err,len,newBf){
            console.log(bf1);
            console.log(len);//长度
            console.log(newBf);
        })
    }
});