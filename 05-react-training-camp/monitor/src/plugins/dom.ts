import { BasePluginType } from '../types/monitor';
import { EventTypes } from '../types/monitor';

export const domPlugin: BasePluginType<EventTypes.DOM> = {
  // if (window.MEventListener) {
  //   return new window.MEventListener(function (event, listener) {
  //     const { type } = event;
  //     if (type === 'click') {
  //       if (
  //         event.target.outerHTML === event.currentTarget.outerHTML ||
  //         event.target.outerHTML === event.currentTarget.children[0].outerHTML
  //       ) {
  //         MEvent.on('click', (data: string) => {
  //           M.push({
  //             category: 'user',
  //             data,
  //             level: 'info',
  //             time: +new Date(),
  //             type: 'UI.Click',
  //           });
  //           localStorage.setItem('M', JSON.stringify(M));
  //           MEvent.emit('update');
  //         });
  //         MEvent.emit('click', event.target.outerHTML);
  //       }
  //     }
  //   });
  // }
};
