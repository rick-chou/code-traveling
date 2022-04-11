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