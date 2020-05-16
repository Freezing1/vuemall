本项目学习之用,具体参考教程**https://coding.imooc.com/class/ds/113**

## 技术栈
- **前端**：Vue，Vue Router，axios，Vuex
- **后端**：Node.js+Express+MongoDB

## 2 系统主要模块

1. 商品列表模块
2. 登录注册模块
3. 购物车模块
4. 地址模块
5. 订单确认模块
6. 订单成功模块

## 3 部分截图
![首页](https://gitee.com/Vanish-F/vuemall/tree/master/static/img/ScreenShot1.png)
![购物车](https://gitee.com/Vanish-F/vuemall/tree/master/static/img/ScreenShot2.png)
![订单成功](https://gitee.com/Vanish-F/vuemall/tree/master/static/img/ScreenShot3.png)

##  运行流程
1. 运行```npm install``` 安装依赖
2. 安装Mongodb数据库，创建数据库Shop，名字和`server/routes/goods.js`下写的保持一致，导入static目录下的两个json文件
3. node 启动 www文件 ```node vuemall/server/bin/www```
4. 执行本地本地开发命令 ```npm run dev```
> VScode可以在设置里搜索npm,将 *[控制是否自动检测 npm 脚本]* 选项打卡，然后在界面左下方工具栏直接双击脚本运行






