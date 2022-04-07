type Plugins = 'click' | 'http' | 'jsError';

interface LooseObj {
  [key: string]: any;
}

type Level = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

type Category = 'user' | 'http' | 'router';

interface IReportItem {
  category: Category;
  data: string;
  level: Level;
  time: number;
  type: string;
}

type IHandler = {
  [key in Plugins]: Function;
};

type IPlugins = {
  [key in Plugins]: Function;
};

interface Window {
  MONITOR: Array<IReportItem>;
  MEventListener: any;
}
