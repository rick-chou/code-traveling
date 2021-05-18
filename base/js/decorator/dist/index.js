"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 类装饰器
 */
var MyClass = log(_class = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class;

function log(target) {
  // 这个 target 在这里就是 MyClass 这个类
  target.prototype.logger = function () {
    return console.log("".concat(target.name, "\u88AB\u8C03\u7528"));
  };
}

var test = new MyClass();
test.logger(); // MyClass 被调用