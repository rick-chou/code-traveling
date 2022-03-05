/**
 * 该特性是非标准的，请尽量不要在生产环境中使用它！
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName
 * 这个显示名称通常在控制台和配置文件中，用它来提醒对它背后的真实函数名 func.name的引用。例如：
 * 通过如下的举例，显示的名称应该显示像"function My Function()"
 */

var a = function () {};
a.displayName = 'My Function';

a; // "function My Function()"
