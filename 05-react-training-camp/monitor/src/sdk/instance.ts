import { clickReport } from './click-report';

export const M = {
  init: () => {
    Object.defineProperty(window, 'MONITOR', {
      get: function () {
        return JSON.parse(localStorage.getItem('M') as string);
      },
    });
    localStorage.getItem('M') || localStorage.setItem('M', JSON.stringify([]));
    clickReport();
    console.log('%c >>>>>>>>>> MONITOR INIT SUCCESS <<<<<<<<<<', 'color:#0f0;');
  },

  get: () => window.MONITOR,

  clear: () => localStorage.setItem('M', JSON.stringify([])),
};
