import { IStackItem } from '../types/monitor';
import { IPlugins, Plugins } from './init';

export class MInstance {
  private stack: IStackItem[] = [];
  constructor(plugins: IPlugins) {
    const that = this;
    this.mixinPlugins(plugins);
    // console.log('%c >>>>>>> MONITOR INIT SUCCESS <<<<<<<', 'color:#0f0;');
  }

  private mixinPlugins(plugins: IPlugins) {
    plugins.forEach(item=>{
      Plugins[item]
    })
  }

  get() {
    return this.stack;
  }

  clear() {
    this.stack = [];
  }
}
