/**
 * Created by 许盛 on 2016/3/11.
 */

/**
 * 搭建一个http服务器，用于处理用户发送的http请求
 * 需要使用node提供的一个模块：http
 */

var http = require('http');

//通过http模块下的createServer方法创建并返回一个web服务器对象
var server = http.createServer();

server.on('error',function(err){
    console.log(err)
});

server.on('listening',function(){
    console.log('listening...');
});

//request事件可以直接写在createServer中的回调函数内
server.on('request',function(req,res){
    console.log('有客户端请求了');

    //往http头部添加一段信息，可使用多次，必须在res.writeHead()之前
    res.setHeader("sex","male");
    res.setHeader("name","xuxusheng");

    //res.writeHead()只能调用一次，且必须在res.end()之前
    //{content-type:text/plain}就是传一段纯文本，不会被解析
    res.writeHead(200,'hello',{'Content-Type':'text/html;charset=utf-8'});

    res.write('<h1>hello</h1>');
    res.end();
});
server.listen(8080,'localhost');
