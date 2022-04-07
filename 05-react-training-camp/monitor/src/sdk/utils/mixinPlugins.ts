import { Handler } from './handler';
import { Plugins } from '../plugins';

export const mixinPlugins = (plugins?: Plugins[]) => {
  plugins = plugins || (Object.keys(Plugins) as Plugins[]);
  plugins.forEach((plugin) => {
    Handler[plugin]();
    Plugins[plugin]();
  });
  console.log(
    `%c >>>>>>> Plugin ${plugins} Start <<<<<<<`,
    'color:#0f0;'
  );
};
