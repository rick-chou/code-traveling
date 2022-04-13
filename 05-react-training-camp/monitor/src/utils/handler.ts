import { MEvent } from '../core/instance';

const M = JSON.parse(localStorage.getItem('M') as string);

export const Handler: IHandler = {
  click: () => {
    MEvent.on('click', (data: string) => {
      M.push({
        category: 'user',
        data,
        level: 'info',
        time: +new Date(),
        type: 'UI.Click',
      });
      localStorage.setItem('M', JSON.stringify(M));
      MEvent.emit('update');
    });
  },
  http: () => {
    MEvent.on(
      'http',
      (data: {
        url: string;
        message: string;
        type: 'xmlHttp' | 'fetch';
        status: boolean;
      }) => {
        const { url, message, type, status } = data;
        M.push({
          category: 'http',
          data: JSON.stringify({ url, message: status ? 'success' : message }),
          level: status ? 'info' : 'error',
          time: +new Date(),
          type,
        });
        localStorage.setItem('M', JSON.stringify(M));
        MEvent.emit('update');
      }
    );
  },
  jsError: () => {
    MEvent.on('jsError', (event: PromiseRejectionEvent) => {
      if (event instanceof PromiseRejectionEvent) {
        M.push({
          category: 'jsError',
          data: JSON.stringify({
            message: event.reason.message,
            stack: event.reason.stack,
          }),
          level: 'error',
          time: +new Date(),
          type: event.type,
        });
      }

      localStorage.setItem('M', JSON.stringify(M));
      MEvent.emit('update');
    });
  },
  router: () => {},
};
