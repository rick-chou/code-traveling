Function.prototype._apply = function (context) {
  // 获取参数
  var args = arguments[1];
  // 如果不传参数 默认是window调用
  context = context || window;
  // 绑定方法
  context.fn = this;
  if (!args) {
    // 没有参数 就直接调用该方法
    context.fn();
  } else {
    if (args instanceof Array) {
      // 有参数 调用方法 并传递参数
      context.fn(...args);
    } else {
      try {
        // 参数不是数组 报错
        throw new Error('CreateListFromArrayLike called on non-object');
      } catch (e) {
        console.log(e);
      }
    }
  }
  // 删除方法
  delete context.fn;
};
