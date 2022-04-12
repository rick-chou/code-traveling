import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css';

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';

function render(props: any) {
  const { container } = props;
  ReactDOM.render(
    <Router basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <App />
    </Router>,
    container
      ? container.querySelector('#root')
      : document.getElementById('root')
  );
}

// some code
renderWithQiankun({
  mount(props) {
    console.log('%c >>>>>>> react sub-app start <<<<<<<', 'color:#0f0;');
    render(props);
  },
  bootstrap() {
    // console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('%c >>>>>>> react sub-app stopped <<<<<<<', 'color:#0f0;');
    const { container } = props;
    const mountRoot = container?.querySelector('#root');
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector('#root')
    );
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
