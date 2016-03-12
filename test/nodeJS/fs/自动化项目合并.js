/**
 * Created by 许盛 on 2016/3/11.
 */

var fs = require('fs');

var filedir = './miaov/source';

fs.watch(filedir,function(ev,file){
    //console.log(ev+'/'+file);
//  这里不需要判断file是否有内容，因为可能是删除导致的事件
//    只要有一个文件发生了变化，我们就需要对这个文件夹下的所有文件进行读取，然后合并
    fs.readdir(filedir,function(err,dataList){
        var arr = [];
        dataList.forEach(function(f){

            if(f){
                var info = fs.statSync(filedir + '/' + f);
                if (info.mode == 33206) {
                    arr.push(filedir + '/' + f);
                }
            }
        });
        //读取数组中文件的内容，并合并
        var content = '';
        arr.forEach(function(f){
            var c = fs.readFileSync(f);
            console.log(c);
        })
    })
});