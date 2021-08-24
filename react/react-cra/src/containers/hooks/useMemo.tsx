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

import React, { useState, useMemo, memo, useEffect } from 'react';
import { Button, message } from 'antd';

interface IProps {
  count?: number;
  config?: { x: number; y: number };
}

// 接收的是基本数据类型 memo生效
const ComponentWithBasicProps = memo(({ count }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithBasicProps更新啦');
  }, [count]);

  return (
    <div>
      <h1>子组件props为基本数据类型</h1>
      <h1>count:{count}</h1>
      <hr />
    </div>
  );
});

// 父组件中没有使用useMemo 子组件的memo失效
const ComponentWithReferencePropsWithoutUseMemo = memo(({ config }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithReferencePropsWithoutUseMemo更新啦');
  }, [config]);

  return (
    <div>
      <h1>子组件props为引用数据类型 父组件未使用useMemo</h1>
      <h1>{`X:${config?.x} Y:${config?.y}`}</h1>
      <hr />
    </div>
  );
});

// 父组件中使用了useMemo 子组件的memo生效
const ComponentWithReferencePropsWithUseMemo = memo(({ config }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithReferencePropsWithUseMemo更新啦');
  }, [config]);
  return (
    <div>
      <h1>子组件props为引用数据类型 父组件使用useMemo</h1>
      <h1>{`X:${config?.x} Y:${config?.y}`}</h1>
      <hr />
    </div>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [flag, setFlag] = useState(false);

  const configWithoutMemo = {
    x,
    y,
  };

  const configWithMemo = useMemo(
    () => ({
      x,
      y,
    }),
    [flag],
  );

  return (
    <div>
      <ComponentWithBasicProps count={count} />
      <ComponentWithReferencePropsWithoutUseMemo config={configWithoutMemo} />
      <ComponentWithReferencePropsWithUseMemo config={configWithMemo} />
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>Change Count</Button>
      <Button onClick={() => setX(x + 1)}>Change X</Button>
      <Button onClick={() => setY(y + 1)}>Change Y</Button>
      <Button onClick={() => setFlag(!flag)}>Update</Button>
    </div>
  );
};

export default Parent;
