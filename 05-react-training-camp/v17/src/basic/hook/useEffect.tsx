import { FC, useEffect, useState } from 'react';
import { Button, message } from 'antd';

import { Markdown } from '@nanshu/ui';

const markdownText = `
~~~jsx
const Even = () => {
  useEffect(() => {
    return () => {
      message.info('奇数');
    };
  }, []);
  return <Button>偶数</Button>;
};

const Odd = () => {
  useEffect(() => {
    return () => {
      message.info('偶数');
    };
  }, []);
  return <Button>奇数</Button>;
};

const App: FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <>
      <Button onClick={() => setState(state + 1)}>{state}</Button>
      {state % 2 === 0 ? <Even /> : <Odd />}
    </>
  );
};
~~~
`;

const Even = () => {
  useEffect(() => {
    return () => {
      message.info('奇数');
    };
  }, []);
  return <Button>偶数</Button>;
};

const Odd = () => {
  useEffect(() => {
    return () => {
      message.info('偶数');
    };
  }, []);
  return <Button>奇数</Button>;
};

const App: FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <>
      <Markdown children={markdownText} title={'useEffect'} />
      <Button onClick={() => setState(state + 1)}>{state}</Button>
      {state % 2 === 0 ? <Even /> : <Odd />}
    </>
  );
};

export default App;
