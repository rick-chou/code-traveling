## 背景

环境配置麻烦 换一台机器 就要重来一次

而且无法保证 软件能在不同的机器上跑起来

## 为什么不是虚拟机

1. 资源占用多
2. 冗余步骤多 （虚拟机是系统级别的 往往需要很多的步骤去配置）
3. 启动慢

## 什么是 Linux 容器

> Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。或者说，在正常进程的外面套了一个保护层。对于容器里面的进程来说，它接触到的各种资源都是虚拟的，从而实现与底层系统的隔离。

由于容器是进程级别的，相比虚拟机有很多优势

1. 启动快
2. 资源占用少
3. 体积小

## 什么是 Docker

> Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案。

> Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。

## Docker 基础

### 镜像

就是像是我们装机时候需要的系统盘或者系统镜像文件，这里它负责创建 docker 容器的，有很多官方现成的镜像：node、mysql、nginx 可以从远程仓库下载

### 容器

可以比拟成一个迷你的系统，例如一个只安装 mysql5.7 的 linux 最小系统，当然你喜欢也可以把 mysql、node 安装在同一个容器中，记住**，容器与容器，容器和主机都是互相隔离的**

### 仓库

仓库就像是 github 那样的，我们可以制作镜像然后 push 提交到云端的仓库，也可以从仓库 pull 下载镜像

## 制作第一个 Docker 容器

1. 创建一个 .dockerignore 文件

```
# 不需要打包进入 image 文件
.git
node_modules
npm-debug.log
```

2. 创建一个 Dockerfile 文件

```
# 指定node版本
FROM node:16.6
# 将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录
COPY . /app
# 指定接下来的工作路径为/app
WORKDIR /app
# 在/app目录下，运行npm install命令安装依赖
RUN npm install --registry=https://registry.npm.taobao.org
# 将容器 3000 端口暴露出来， 允许外部连接这个端口
EXPOSE 3000
# 在容器启动后执行 可以有多个RUN 只能有一个CMD
CMD node app.js
```

3. 创建 image 文件

```
docker image build -t express-demo .
```

4. 生成容器

```
docker container run -p 8000:3000 -it express-demo /bin/bash
```

5. 发布 image 文件

> 注册帐号 https://hub.docker.com/

```
docker login

and

docker image tag express-demo luckychou710/express-demo:0.0.1

and

docker image push luckychou710/express-demo:0.0.1
```

## 参考

> http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html
