const markdownText = `
~~~tsx
/**
 * useMemo
 * 有一个父组件，其中包含子组件，子组件接收一个对象作为props
 * 通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的
 * memo可以帮助我们的函数式组件 进行性能优化 避免不必要的渲染
 * 但是当props是引用数据类型的时候 memo就会失效
 * 我们可以借助useMemo来包装这个props，这样memo才会生效，子组件就能避免不必要的更新
 * useMemo(()=>({}),[])
 * 第一个参数 是一个函数 返回一个对象
 * 第二个参数 是一个数组 包含了这个对象的依赖项 只有依赖项更新 函数才会重新执行
 */

import { useState, useEffect, useMemo } from 'react';
import { Button, message } from 'antd';

interface IProps {
  getSum: () => number;
}

const ComponentWithoutUseMemo = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithoutUseMemo');
  }, [getSum]);

  return null;
};

const ComponentWithUseMemo = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithUseMemo');
  }, [getSum]);

  return null;
};

const Parent = () => {
  const [num, setNum] = useState(0);
  const [max, setMax] = useState(100);

  // 只要父组件更新 子组件就会更新
  const methodsWithoutUseMemo = () => {
    message.info('methodsWithoutUseMemo');
    return max;
  };

  // 只有当max更新时 函数才会重新执行 子组件才会更新
  const methodsWithUseMemo = useMemo(
    () => () => {
      message.info('methodsWithUseMemo');
      return max;
    },
    [max]
  );

  return (
    <div>
      <p>num : {num}</p>
      <Button onClick={() => setNum(num + 1)}>change num</Button>
      <Button onClick={() => setMax((pre) => pre * 2)}>change max</Button>
      <ComponentWithoutUseMemo getSum={methodsWithoutUseMemo} />
      <ComponentWithUseMemo getSum={methodsWithUseMemo} />
    </div>
  );
};

export default Parent;
~~~
`;

import { useState, useEffect, useMemo } from 'react';
import { Button, message } from 'antd';

import { Markdown } from '@nanshu/ui';

interface IProps {
  getSum: () => number;
}

const ComponentWithoutUseMemo = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithoutUseMemo');
  }, [getSum]);

  return null;
};

const ComponentWithUseMemo = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithUseMemo');
  }, [getSum]);

  return null;
};

const Parent = () => {
  const [num, setNum] = useState(0);
  const [max, setMax] = useState(100);

  // 只要父组件更新 子组件就会更新
  const methodsWithoutUseMemo = () => {
    message.info('methodsWithoutUseMemo');
    return max;
  };

  // 只有当max更新时 函数才会重新执行 子组件才会更新
  const methodsWithUseMemo = useMemo(
    () => () => {
      message.info('methodsWithUseMemo');
      return max;
    },
    [max]
  );

  return (
    <div>
      <Markdown children={markdownText} title="useMemo" />
      <p>num : {num}</p>
      <Button onClick={() => setNum(num + 1)}>change num</Button>
      <Button onClick={() => setMax((pre) => pre * 2)}>change max</Button>
      <ComponentWithoutUseMemo getSum={methodsWithoutUseMemo} />
      <ComponentWithUseMemo getSum={methodsWithUseMemo} />
    </div>
  );
};

export default Parent;
