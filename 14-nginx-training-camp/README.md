> 环境 Mac M1
> 文件目录 /opt/homebrew/var/www
> nginx 目录 /opt/homebrew/etc/nginx

## 命令

```
sudo nginx              #打开Nginx
sudo nginx -t           #测试配置文件是否有语法错误
sudo nginx -s reopen    #重启Nginx
sudo nginx -s reload    #重新加载Nginx配置文件，然后以优雅的方式重启Nginx
sudo nginx -s stop      #强制停止Nginx服务
sudo nginx -s quit      #优雅地停止Nginx服务（即处理完所有请求后再停止服务）
```

## Demo

1. 基础配置

```nginx
  server {
      listen       3001;
      server_name  localhost;

      location / {
          root   /opt/homebrew/var/www/node-demo;
          index  index.html;
      }
  }
```

2. BrowserRouter 配置

```
  server {
      listen       3002;
      server_name  localhost;

      location / {
          root   /opt/homebrew/var/www/react-v17;
          index  index.html;
          try_files $uri $uri/ /index.html;
      }
  }
```
