interface LooseObj {
  [key: string]: any;
}

type Level = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

type Category = 'user' | 'http' | 'router';

interface ReportItem {
  category: Category;
  data: string;
  level: Level;
  time: number;
  type: string;
}

interface Window {
  MONITOR: Array<ReportItem>;
  MEventListener: any;
}
