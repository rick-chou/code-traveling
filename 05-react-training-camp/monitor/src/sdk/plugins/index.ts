import { clickReport } from './click-report';
import { httpReport } from './http-report';
import { jsErrorReport } from './error-report';

export const Plugins: IPlugins = {
  click: clickReport,
  http: httpReport,
  jsError: jsErrorReport,
};
