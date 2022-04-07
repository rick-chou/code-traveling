import { MEvent } from '.';

export const clickReport = () => {
  if (window.MEventListener) {
    return new window.MEventListener(function (event, listener) {
      const { type } = event;
      if (type === 'click') {
        if (
          event.target.outerHTML === event.currentTarget.outerHTML ||
          event.target.outerHTML === event.currentTarget.children[0].outerHTML
        ) {
          const M = JSON.parse(localStorage.getItem('M') as string);
          M.push({
            category: 'user',
            data: event.target.outerHTML,
            level: 'info',
            time: +new Date(),
            type: 'UI.Click',
          });
          localStorage.setItem('M', JSON.stringify(M));
          MEvent.emit('update', null);
        }
      }
    });
  }
};
