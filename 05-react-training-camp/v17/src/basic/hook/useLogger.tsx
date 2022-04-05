const markdownText = `
~~~tsx
/**
 * 自定义hook 
 * 命名必须以use开头
 */

import { useEffect, useState } from 'react';

const useLogger = (componentName: string) => {
  useEffect(() => {
    console.log(componentName, '组件被创建了');

    return () => {
      console.log(componentName,'组件被销毁了');
    };
  }, []);
};

const Header = () => {
  useLogger('Header');

  return <h2>Header</h2>;
};

const Footer = () => {
  useLogger('Footer');

  return <h2>Footer</h2>;
};

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'hidden' : 'show'}</button>
      {show && <Header />}
      {show && <Footer />}
    </div>
  );
}
~~~
`;

import { useEffect, useState } from 'react';

import { Markdown } from '@/components';

const useLogger = (componentName: string) => {
  useEffect(() => {
    console.log(`${componentName}组件被创建了`);

    return () => {
      console.log(`${componentName}组件被销毁了`);
    };
  }, []);
};

const Header = () => {
  useLogger('Header');

  return <h2>Header</h2>;
};

const Footer = () => {
  useLogger('Footer');

  return <h2>Footer</h2>;
};

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Markdown children={markdownText} title="自定义hook" />
      <button onClick={() => setShow(!show)}>{show ? 'hidden' : 'show'}</button>
      {show && <Header />}
      {show && <Footer />}
    </div>
  );
}
