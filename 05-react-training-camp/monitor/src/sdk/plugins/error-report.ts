import { MEvent } from '../instance';

export const jsErrorReport = () => {
  window.addEventListener('error', (...args) => {
    console.log('error', args);
  });
  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      MEvent.emit('jsError', event);
      // console.log('unhandledrejection', event);
    }
  );
};
