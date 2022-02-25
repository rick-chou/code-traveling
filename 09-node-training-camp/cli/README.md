```
Usage: YepGym [options] [command]

 __    __              ____                        __
/\ \  /\ \            /\  _`\                     /\ \
\ `\`\\/'/  __   _____\ \ \L\_\  __  __    ___ ___\ \ \
 `\ `\ /' /'__`\/\ '__`\ \ \L_L /\ \/\ \ /' __` __`\ \ \
   `\ \ \/\  __/\ \ \L\ \ \ \/, \ \ \_\ \/\ \/\ \/\ \ \_\
     \ \_\ \____\\ \ ,__/\ \____/\/`____ \ \_\ \_\ \_\/\_\
      \/_/\/____/ \ \ \/  \/___/  `/___/> \/_/\/_/\/_/\/_/
                   \ \_\             /\___/
                    \/_/             \/__/

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  create|c        create a project
  help [command]  display help for command
```

```
cli
├─ .eslintrc.js
├─ README.md
├─ bin
│  └─ YepGym.js
├─ lib
│  ├─ commander.js
│  ├─ create.js
│  ├─ main.js
│  └─ utils
│     ├─ constants.js
│     ├─ generator.js // 编译模版文件
│     ├─ loadCustomPreset.js // 加载用户自定义配置
│     ├─ loadRemotePreset.js // 加载远程仓库模版
│     ├─ prompt.js // 用户自定义信息输入
│     ├─ request.js  //  github api request
│     └─ sign.js
├─ package.json
└─ yarn.lock

```
