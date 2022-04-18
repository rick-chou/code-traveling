// call 是可以被所有的函数继承的，所以 call 方法应该被定义在 Function.prototype 上
// call 方法做了两件事：
// 改变 this 的指向，将 this 绑到第一个入参指定的的对象上去；
// 根据输入的参数，执行函数。

var me = {
  name: 'chou',
};

function showName() {
  console.log(this.name);
}

showName.call(me); // chou

// v1
Function.prototype._call = function (context) {
  context.fn = this;
  context.fn();
  delete context.fn;
};

var foo = {
  name: 'chou',
};

function sayName() {
  console.log(this.name);
}

sayName._call(foo); // chou

// v2
Function.prototype._call = function (context) {
  var args = [];
  // 从第二个参数开始 因为第一个存放的是我们的函数
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  // 不传递参数的时候 默认是window
  context = context || window;
  context.fn = this;
  context.fn(...args);
  delete context.fn;
};

var foo = {
  name: 'chou',
};

function sayName(...msg) {
  console.log(this.name, ...msg);
}

sayName._call(foo, 'yep', '🤨'); // chou yep 🤨
