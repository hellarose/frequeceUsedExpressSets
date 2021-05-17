let {rand}=require('../fums/index.js');

/* 一级路由配置 */
/* 引入模块，封装对象 */
/* require引入开发框架模块，封装成框架对象（函数） */
let express = require('express');
/* 引入文件系统磨模块，封装成文件系统对象 */
let fs=require('fs')
/* 引入body解析模块，封装成body解析对象 */
let bodyParser=require('body-parser')

/* 将框架对象Router方法调用结果封装为路由模块对象 */
let rou = express.Router();
/* 调用bodp的urlencoded方法设置extented为false，将调用结果封装为地址栏解析对象 */
let urle=bodyParser.urlencoded({extended:false})


/* 封装路由设置函数，所有一级路由请求和响应均在此函数中进行 */

/* 一级默认路由（首页路由） */
rou.get('/', function (req, res) {
    res.send('./')
});
rou.get('/test', function (req, res) {
    /* 防止中文乱码 */
    res.writeHeader(200,{'Content-type':'text/html;charset=utf-8'})
    res.write('尝试成功，运行验证随机码：'+rand()+rand()+rand()+rand(),'utf-8')
    res.end()
});

/* 模块导出--路由模块对象 */
module.exports = rou;