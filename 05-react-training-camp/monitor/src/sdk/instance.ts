import { mixinPlugins } from './utils/mixinPlugins';
import { MEmitter } from './utils/subscribe';
import { EventListener } from './utils/event-listener';

export const MEvent = new MEmitter();
window.MEventListener = EventListener;

export const M = {
  init: (plugins?: Plugins[]) => {
    Object.defineProperty(window, 'MONITOR', {
      get: function () {
        return JSON.parse(localStorage.getItem('M') as string);
      },
    });
    localStorage.getItem('M') || localStorage.setItem('M', JSON.stringify([]));

    mixinPlugins(plugins);

    console.log('%c >>>>>>> MONITOR INIT SUCCESS <<<<<<<', 'color:#0f0;');
  },

  get: () => window.MONITOR,

  clear: () => localStorage.setItem('M', JSON.stringify([])),
};
