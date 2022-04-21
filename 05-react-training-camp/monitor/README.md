## EVENT

> 需求: 监听有点击事件的元素被触发了

### 事件绑定的三种方式

- 在 DOM 元素中直接绑定
- 在 js 事件中获取 dom 事件绑定
- 事件监听 addEventListener

```html
<!-- 方式一 直接在DOM上绑定 -->
<button id="btn" onclick="handleClick()">click</button>

<script>
  const handleClick = () => {
    console.log('A');
  };

  window.onload = () => {
    // 方式二 在 js 事件中获取 dom 事件绑定
    document.querySelector('#btn').onclick = () => {
      console.log('B');
    };
    document.querySelector('#btn').onclick = () => {
      console.log('C');
    };
    // 方式三 事件监听 addEventListener
    document.querySelector('#btn').addEventListener('click', () => {
      console.log('D');
    });
    document.querySelector('#btn').addEventListener('click', () => {
      console.log('E');
    });
  };
</script>
```

这时候点击 button 可以看到控制台输出 C D E

这是因为 方法一和方法二 只能绑定一个方法 多次绑定后者会覆盖前者

所以 --> B 覆盖 A --> C 覆盖 B --> 最后输出 C

而方法三则可以绑定多个方法

这边 我只考虑 `addEventListener`

重写 `addEventListener` 这个方法就好了

```js
const oldAddEventListener = EventTarget.prototype.addEventListener;
const newAddEventListener = function (eventType, callback, ...args) {
  const newCb = (e) => {
    callback();
    console.log('[addEventListener]', e.target);
  };
  oldAddEventListener.call(this, eventType, newCb, ...args);
};
EventTarget.prototype.addEventListener = newAddEventListener;
```

## HTTP REQUEST

> 需求: 监听请求 URL STATUS

## xhr

我们发起一次 ajax 请求的代码如下

```js
function reqListener() {
  console.log('[addEventListener]', JSON.parse(this.response));
}

var xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('[onreadystatechange]', JSON.parse(xhr.response));
  }
};
xhr.open('GET', 'http://v3.wufazhuce.com:8000/api/channel/one/0/0');
xhr.send();
```

其中 `xhr.send()` 用于发送这个请求 所以我们改写这个方法

而监听响应 可以有 `onreadystatechange` 和 `addEventListener` 两种方式

所以我们两种都要兼顾

- addEventListener

  - loadstart 当程序开始加载时，loadstart 事件将被触发
  - load 请求完成
  - loadend 加载进度停止之后被触发 比如 error 之后触发
  - progress 在请求接收到数据的时候被周期性触发
  - error 请求遇到错误
  - abort 请求终止

- onreadystatechange
  - 0 UNSENT 代理被创建，但尚未调用 open() 方法。
  - 1 OPENED open() 方法已经被调用。
  - 2 HEADERS_RECEIVED send() 方法已经被调用，并且头部和状态已经可获得。
  - 3 LOADING 下载中； responseText 属性已经包含部分数据。
  - 4 DONE 下载操作已完成。

```js
var xmlHttp = window.XMLHttpRequest;
var oldSend = xmlHttp.prototype.send;
var handleEvent = function (event) {
  console.log(event);
};
xmlHttp.prototype.send = function () {
  // this就是XMLHttpRequest这个对象
  if (this['addEventListener']) {
    this.addEventListener('load', handleEvent);
    this.addEventListener('error', handleEvent);
  } else {
    var oldStateChange = this['onreadystatechange'];
    this['onreadystatechange'] = function (event) {
      if (this.readyState === 4) {
        handleEvent(event);
      }
      oldStateChange && oldStateChange.apply(this, arguments);
    };
  }
  return oldSend.apply(this, arguments);
};
```

## fetch

```js
fetch('http://v3.wufazhuce.com:8000/api/channel/one/0/0');
```

同上 就是重写方法

```js
const oldFetch = window.fetch;
const newFetch = function (url, options) {
  console.log('url>>>', url);
  console.log('options>>>', options);
  return oldFetch.call(this, url, options);
};
window.fetch = newFetch;
```

## ROUTE

> 需求: 监听路由变化

### hash

URL 的 hash 也就是锚点(#), 本质上是改变 window.location 的 href 属性

我们可以通过直接赋值 location.hash 来改变 href, 但是页面不发生刷新

```html
<div id="app">
  <a href="#/home">home</a>
  <a href="#/about">about</a>
  <div class="router-view"></div>
</div>

<script>
  // 1.获取router-view
  const routerViewEl = document.querySelector('.router-view');

  // 2.监听hashchange
  window.addEventListener('hashchange', () => {
    switch (location.hash) {
      case '#/home':
        routerViewEl.innerHTML = 'home';
        break;
      case '#/about':
        routerViewEl.innerHTML = 'about';
        break;
      default:
        routerViewEl.innerHTML = 'default';
    }
  });
</script>
```

hash 的优势就是兼容性更好，在老版 IE 中都可以运行，但是缺陷是有一个# 显得不像一个真实的路径

### history

history 接口是 HTML5 新增的, 它有六种模式改变 URL 而不刷新页面

- replaceState：替换原来的路径

- pushState：使用新的路径

- popState：路径的回退

- go：向前或向后改变路径

- forward：向前改变路径

- back：向后改变路径

```html
<div id="app">
  <a href="/home">home</a>
  <a href="/about">about</a>
  <div class="router-view"></div>
</div>

<script>
  // 1.获取router-view
  const routerViewEl = document.querySelector('.router-view');

  // 2.监听所有的a元素
  const aEls = document.getElementsByTagName('a');
  for (let aEl of aEls) {
    aEl.addEventListener('click', (e) => {
      e.preventDefault();
      const href = aEl.getAttribute('href');
      console.log(href);
      history.pushState({}, '', href);
      historyChange();
    });
  }

  // 3.监听popstate和go操作
  window.addEventListener('popstate', historyChange);
  window.addEventListener('go', historyChange);

  // 4.执行设置页面操作
  function historyChange() {
    switch (location.pathname) {
      case '/home':
        routerViewEl.innerHTML = 'home';
        break;
      case '/about':
        routerViewEl.innerHTML = 'about';
        break;
      default:
        routerViewEl.innerHTML = 'default';
    }
  }
</script>
```

## JS ERROR

> 需求: 错误监控

### 静态资源加载异常

```html
<script>
  function errorHandler(error) {
    console.log('onerror捕获到异常', error);
  }
</script>
<!-- 静态资源加载异常 -->
<script src="https://nanshu.js" onerror="errorHandler(this)"></script>
```

```
onerror捕获到异常 <script src=​"https:​/​/​nanshu.js" onerror=​"errorHandler(this)​">​</script>​
```

### JS 代码错误

用 cry-catch 捕获

```js
// 无法捕获异步场景
try {
  jsError;
} catch (error) {
  console.log('try-catch捕获到异常>>>', error);
}

try {
  setTimeout(() => {
    undefined.map((v) => v);
  }, 1000);
} catch (error) {
  console.log('try-catch捕获到异常>>>', error);
}
```

### JS 语法错误

- Error：错误的基类，其他错误都继承自该类型
- EvalError：Eval 函数执行异常
- RangeError：数组越界
- ReferenceError：尝试引用一个未被定义的变量时，将会抛出此异常
- SyntaxError：语法解析不合理
- TypeError：类型错误，用来表示值的类型非预期类型时发生的错误
- URIError：以一种错误的方式使用全局 URI 处理函数而产生的错误

```js
/**
 * @param {String}  message    错误信息
 * @param {String}  source     出错文件
 * @param {Number}  lineno     行号
 * @param {Number}  colno      列号
 * @param {Object}  error      Error对象（对象）
 * @description 无法捕获静态资源异常和 JS 代码错误
 */
window.onerror = function (message, source, lineno, colno, error) {
  console.log('window.onerror捕获到异常', {
    message,
    source,
    lineno,
    colno,
    error,
  });
};

// 没有行号这些信息 只有错误信息
window.addEventListener(
  'error',
  (event) => {
    console.log('window.addEventListener("error")捕获到异常', event);
  },
  true
);
```

### unhandledrejection

捕获未对 rejected 状态做处理的 Promise

```js
Promise.reject('ops').catch((e) => {});
Promise.reject('ops');

// 捕获未对 rejected 状态做处理的 Promise
window.addEventListener('unhandledrejection', (event) => {
  console.log('unhandledrejection', event);
});
```

```js
// output
PromiseRejectionEvent
isTrusted: true
bubbles: false
cancelBubble: false
cancelable: true
composed: false
currentTarget: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
defaultPrevented: false
eventPhase: 0
path: [Window]
promise: (...)
reason: "ops"
returnValue: true
srcElement: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
target: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
timeStamp: 81.30000000074506
type: "unhandledrejection"
[[Prototype]]: PromiseRejectionEvent
```

## React 错误
