import { MEvent } from '../instance';

export const clickReport = () => {
  if (window.MEventListener) {
    return new window.MEventListener(function (event, listener) {
      const { type } = event;
      if (type === 'click') {
        if (
          event.target.outerHTML === event.currentTarget.outerHTML ||
          event.target.outerHTML === event.currentTarget.children[0].outerHTML
        ) {
          MEvent.emit('click', event.target.outerHTML);
        }
      }
    });
  }
};
