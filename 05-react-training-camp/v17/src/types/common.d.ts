interface LooseObj {
  [key: string]: any;
}

interface IAction {
  type: string;
  [x: string]: any;
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

interface ImportMetaEnv {
  VITE_APP_BASE_URL: string;
}
