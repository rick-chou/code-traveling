## 在 package.json 中配置

新增 browserslist 字段

```
{
  "browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
  ]
}
```

## 单独的 .browserslistrc 文件

直接在里面编写

```
> 1%
not dead
```
