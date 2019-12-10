# 项目初始架构
- yarn add axios react-router-dom less less-loader
- 配置less 记得修改getStyleLoaders添加lessOptions参数,之后模仿sassRegex
- 配置@ alias中配置'@': paths.appSrc
- 重置默认样式reset.less

- text-decoration: none 清除a默认下划线
- overflow: auto;
- white-space: nowrap;
- flex-direction: column;
- &::-webkit-scrollbar webkit浏览器自定义滚动条

- react-swipe

# 跨域配置
- 后端跨域
```JavaScript 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
});
```
- 前端跨域在package.json中配置 "proxy": "http://localhost:8888" 即可！