// v1
Function.prototype._bind = function (context) {
  var self = this;
  return function () {
    return self.apply(context);
  };
};

// v2
Function.prototype._bind = function (context) {
  var self = this;
  // 获取第二个参数到最后一个参数 第一个为函数 我们需要传入的变量
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // 用concat合并两次的参数
    return self.apply(context, args.concat(bindArgs));
  };
};
