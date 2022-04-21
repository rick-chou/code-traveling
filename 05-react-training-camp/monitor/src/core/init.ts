import { domPlugin } from '../plugins/dom';
import { xhrPlugin } from '../plugins/xhr';
import { fetchPlugin } from '../plugins/fetch';
import { errPlugin } from '../plugins/error';
import { unhandledrejectionPlugin } from '../plugins/unhandledrejection';
import { hashRoutePlugin } from '../plugins/hashRouter';
import { historyRoutePlugin } from '../plugins/historyRoute';

import { MInstance } from './instance';

export const Plugins = {
  dom: domPlugin,
  xhr: xhrPlugin,
  fetch: fetchPlugin,
  err: errPlugin,
  unhandledrejection: unhandledrejectionPlugin,
  hashRoute: hashRoutePlugin,
  historyRoute: historyRoutePlugin,
};

export type IPlugins = Array<keyof typeof Plugins>;

export const init = (plugins: IPlugins) => {
  return new MInstance(plugins);
};
