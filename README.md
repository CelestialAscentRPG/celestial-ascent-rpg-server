# CelestialAscentRPG Server

登仙长阶-服务器端

## 一、部署

TODO

## 二、开发说明

请使用`yarn`作为包管理器，开发时请使用`yarn`命令。

### 1、安装依赖

```shell
# 如果你的终端没设置代理，记得先关闭yarn更新检测
yarn config set disable-self-update-check true
yarn install
```

### 2、配置环境变量
在根目录下创建`.env.development`文件，内容如下：
```text
DATABASE_HOST=数据库的IP地址
DATABASE_PORT=11451
DATABASE_USER=dev
DATABASE_PASSWORD=密码
DATABASE_NAME=celascent
```

### 3、启动本地开发服务

```shell
yarn start:dev
```
