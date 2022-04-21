import { EventCategories, EventTypes, IStackItem } from '../types/monitor';
import { IPlugins, Plugins } from './init';

export class MInstance {
  private stack: IStackItem[] = [
    {
      category: EventCategories.CLICK,
      data: 'msg',
      level: 'error',
      time: +new Date(),
      type: EventTypes.DOM,
    },
  ];
  constructor(plugins: IPlugins) {
    const that = this;
    this.mixinPlugins(plugins);
    console.log('%c >>>>>>> MONITOR INIT SUCCESS <<<<<<<', 'color:#0f0;');
    console.log(`%c >>>>>>> Plugins ${plugins} start <<<<<<<`, 'color:#0f0;');
  }

  // 注册插件
  private mixinPlugins(plugins: IPlugins) {
    plugins.forEach((item) => {
      Plugins[item];
    });
  }

  get() {
    return this.stack;
  }

  clear() {
    this.stack = [];
  }
}
