export class MEmitter {
  eventMap: { [key: string]: Function[] };

  constructor() {
    this.eventMap = {};
  }

  on(type: string, handler: Function) {
    if (!(handler instanceof Function)) {
      throw new Error('请传一个函数');
    }

    if (!this.eventMap[type]) {
      this.eventMap[type] = [];
    }

    this.eventMap[type].push(handler);
  }

  emit(type: string, ...params: any) {
    if (this.eventMap[type]) {
      this.eventMap[type].forEach((handler) => {
        handler(...params);
      });
    }
  }

  off(type: string, handler: Function) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1);
    }
  }
}
