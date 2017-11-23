const path = require('path');
const express = require('express');

const indexRouter = require('./routes/index');
const app = express();
var routes = require('./routes');

app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs
app.use(express.static(path.join(__dirname, '/public')));

/*路由*/
routes(app);

app.listen(3000)