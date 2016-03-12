/**
 * Created by 许盛 on 2016/3/11.
 */
    // 实现结构分离

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer();
var HtmlDir = __dirname + '/html/';

server.on('request',function(req,res){
    var urlStr = url.parse(req.url);
    switch (urlStr.pathname){
        case '/':
            //首页
            sendData(HtmlDir + 'index.html', req, res);
            break;
        case '/user':
            //用户首页
            sendData(HtmlDir + 'user.html', req, res);
            break;
        case '/login':
            sendData(HtmlDir + 'login.html', req, res);
            break;
        case '/login/check':
            console.log(req.method);
            console.log(urlStr);
            break;
        default:
            //处理其他情况
            sendData(HtmlDir + 'error.html', req, res);
            break;
    }
});
server.listen(8080,'localhost');

function sendData(file,req,res){
    fs.readFile(file,function(err,data){
        console.log(file);
        if (err) {
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>页面被LEO吃掉了</h1>');
        } else {
            res.writeHead(200,{
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end(data);
        }
    });
}