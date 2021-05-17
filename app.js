
/* 用require函数引入开发框架模块，封装成开发框架对象（函数） */
let express = require('express');
/* 引入路径处理模块，封装成路径对象 */
let path = require('path');
/* 引入cookie小型文本文件解析模块，封装cookie解析对象 */
let cookieParser = require('cookie-parser');

/* 引入路由配置文件，封装成路由配置对象 */
/* 一级路由 */
let indexRouter = require('./routers/index');

/* 调用开发框架函数，封装成应用对象 */
let app = express();
/* 调用应用对象listen方法设置服务器端口号 */
app.listen(8219)

/* 调用应用对象set方法，进行视图文件路径、类型设置 */
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

/* 调用应用对象use方法，配置惊悚文件、地址栏、cookie和静态文件目录 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* 调用应用对象use方法，配置各级路由对应路由对象 */
/* 一级路由 */
app.use('/', indexRouter);