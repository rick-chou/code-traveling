/**
 * on()：负责注册事件的监听器，指定事件触发时的回调函数。
 * emit()：负责触发事件，可以通过传参使其在触发的时候携带数据 。
 * off()：负责监听器的删除。
 */

class myEventEmitter {
  constructor() {
    // eventMap 用来存储事件和监听函数之间的关系
    this.eventMap = {};
  }

  // type 这里就代表事件的名称
  on(type, handler) {
    // handler 必须是一个函数，如果不是直接报错
    if (!(handler instanceof Function)) {
      throw new Error('哥 打住 请传一个函数');
    }

    // 判断 type 事件对应的队列是否存在
    if (!this.eventMap[type]) {
      // 若不存在，新建该队列
      this.eventMap[type] = [];
    }

    // 若存在，直接往队列里推入 handler
    this.eventMap[type].push(handler);
  }

  // 别忘了我们前面说过触发时是可以携带数据的，params 就是数据的载体
  emit(type, params) {
    // 假设该事件是有订阅的（对应的事件队列存在）
    if (this.eventMap[type]) {
      // 将事件队列里的 handler 依次执行出队
      this.eventMap[type].forEach(handler => {
        // 注意别忘了读取 params
        handler(params);
      });
    }
  }

  off(type, handler) {
    if (this.eventMap[type]) {
      // 如果没找到 -1 >>> 0 则会是很大的数 splice就不会进行操作
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1);
    }
  }
}

// 实例化 myEventEmitter
const myEvent = new myEventEmitter();
// 编写一个简单的 handler
const testHandler = function (params) {
  console.log(`test事件被触发了，testHandler 接收到的入参是${params}`);
};
// 监听 test 事件
myEvent.on('test', testHandler);
// 在触发 test 事件的同时，传入希望 testHandler 感知的参数
myEvent.emit('test', 'newState'); // --> test事件被触发了，testHandler 接收到的入参是newState
