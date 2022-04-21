import { BasePluginType } from '../types/monitor';
import { EventTypes } from '../types/monitor';

export const xhrPlugin: BasePluginType<EventTypes.XHR> = {
  name: EventTypes.XHR,
  monitor: () => {},
  transform: () => {},
  consumer: () => {},
};
