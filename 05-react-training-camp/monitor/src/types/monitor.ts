// 收集路由信息
interface RouteChangeCollectType {
  from: string;
  to: string;
}

// 事件类别
export const enum EventCategories {
  HTTP = 'Http',
  CLICK = 'UI.Click',
  ROUTE = 'Route',
  Error = 'Error',
}

// 具体的事件种类
export const enum EventTypes {
  XHR = 'xhr',
  FETCH = 'fetch',
  DOM = 'dom',
  HISTORY = 'history',
  HASHCHANGE = 'hashchange',
  ERROR = 'error',
  UNHANDLEDREJECTION = 'unhandledrejection',
}

// 日志等级
export type EventLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export interface IStackItem {
  category: EventCategories;
  data: string;
  level: EventLevel;
  time: number;
  type: EventTypes;
}

export interface BasePluginType<T extends EventTypes> {
  /**
   * @description 事件类型
   */
  name: T;
  /**
   * @description 监控事件 通知订阅者
   */
  monitor: (emit: (eventName: T, data: any) => void) => void;
  /**
   * @description 转换数据格式
   */
  transform: (collectedData: any) => any;
  /**
   * @description 拿到数据进行一些操作 例如report
   */
  consumer: (transformData: any) => void;
}
