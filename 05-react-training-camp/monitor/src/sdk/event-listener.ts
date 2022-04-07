const EventTargetProto = window.EventTarget.prototype;
export class EventListener {
  constructor(fn) {
    this.reWriteAddEventListener(fn);
    this.reWriteRemoveEventListener();
    return this;
  }

  // 重写addEventListener
  reWriteAddEventListener(fn) {
    const oldAdd = EventTargetProto.addEventListener;
    const newAdd = function () {
      const listener = arguments[1];
      const newListener = function (e) {
        fn.call(this, e, listener);
        return listener.call(this, e);
      };
      // 原函数关联新函数
      listener._catchFunction = newListener;
      return newListener;
    };
    EventTargetProto.addEventListener = function (type) {
      return oldAdd.call(this, type, newAdd.call(this, ...arguments));
    };
  }

  // 重写removeEventListener
  reWriteRemoveEventListener() {
    const oRemove = EventTargetProto.removeEventListener;
    const nRemove = function () {
      const listener = arguments[1];
      // 移除挂载函数
      return (listener && listener._catchFunction) || listener;
    };

    EventTargetProto.removeEventListener = function (type) {
      return oRemove.call(this, type, nRemove.call(this, ...arguments));
    };
  }
}
