import { BasePluginType } from '../types/monitor';
import { EventTypes } from '../types/monitor';

export const xhrPlugin: BasePluginType<EventTypes.XHR> = {
  name: EventTypes.XHR,
  monitor: () => {},
  transform: () => {},
  consumer: () => {},
  // if (!window.XMLHttpRequest) return;
  // var xmlHttp = window.XMLHttpRequest;
  // var oldSend = xmlHttp.prototype.send;
  // var _handleEvent = function (event) {
  //   event.currentTarget.status &&
  //     MEvent.emit('http', {
  //       url: event.currentTarget.responseURL,
  //       message: JSON.parse(event.currentTarget.response).message,
  //       type: 'XMLHttpRequest',
  //       status: event.currentTarget.status === 200,
  //     });
  // };
  // xmlHttp.prototype.send = function () {
  //   if (this['addEventListener']) {
  //     this['addEventListener']('error', _handleEvent);
  //     this['addEventListener']('load', _handleEvent);
  //     this['addEventListener']('abort', _handleEvent);
  //   } else {
  //     var _oldStateChange = this['onreadystatechange'];
  //     this['onreadystatechange'] = function (event) {
  //       if (this.readyState === 4) {
  //         _handleEvent(event);
  //       }
  //       _oldStateChange && _oldStateChange.apply(this, arguments);
  //     };
  //   }
  //   return oldSend.apply(this, arguments as any);
  // };
};
