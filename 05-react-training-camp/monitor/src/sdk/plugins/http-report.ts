import { MEvent } from '../instance';

export const httpReport = () => {
  if (!window.XMLHttpRequest) return;
  var xmlHttp = window.XMLHttpRequest;
  var oldSend = xmlHttp.prototype.send;
  var _handleEvent = function (event) {
    event.currentTarget.status &&
      MEvent.emit('http', {
        url: event.currentTarget.responseURL,
        message: JSON.parse(event.currentTarget.response).message,
        type: 'XMLHttpRequest',
        status: event.currentTarget.status === 200,
      });
  };
  xmlHttp.prototype.send = function () {
    if (this['addEventListener']) {
      this['addEventListener']('error', _handleEvent);
      this['addEventListener']('load', _handleEvent);
      this['addEventListener']('abort', _handleEvent);
    } else {
      var _oldStateChange = this['onreadystatechange'];
      this['onreadystatechange'] = function (event) {
        if (this.readyState === 4) {
          _handleEvent(event);
        }
        _oldStateChange && _oldStateChange.apply(this, arguments);
      };
    }
    return oldSend.apply(this, arguments as any);
  };

  // if (!window.fetch) return;
  // let _oldFetch = window.fetch;
  // window.fetch = function () {
  //   return _oldFetch
  //     .apply(this, arguments)
  //     .then((res) => {
  //       if (!res.ok) {
  //         console.log('111111');
  //       }
  //       return res;
  //     })
  //     .catch((error) => {
  //       // 上报错误
  //       throw error;
  //     });
  // };
};
