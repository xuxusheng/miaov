/**
 * Created by 许盛 on 2016/3/11.
 */


var http = require('http');
var url = require('url');
var server = http.createServer();

server.on('request',function(req,res){
    //req.url:访问路径
    //?后面的部分query string查询字符串
    console.log(req.url);
    var urlStr = url.parse(req.url);
    switch (urlStr.pathname){
        case '/':
            //首页
            res.writeHead(200,{
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>这是首页</h1>');
            break;
        case '/user':
            //用户首页
            res.writeHead(200,{
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>个人中心页</h1>');
            break;
        default:
            //处理其他情况
            res.writeHead(404,{
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>页面被LED吃掉了</h1>');
            break;
    }
});
server.listen(8080,'localhost');