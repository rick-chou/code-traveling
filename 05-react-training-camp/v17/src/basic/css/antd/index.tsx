const markdownText = `
~~~scss
:global {
  .ant-btn {
    width: 200px;
  }
}
~~~
`;

import { Button } from 'antd';

import { Markdown } from '@nanshu/ui';

import './index.module.scss';

const App = () => {
  return (
    <>
      <Markdown children={markdownText} title="修改antd样式" />
      <Button>Antd</Button>
    </>
  );
};

export default App;
