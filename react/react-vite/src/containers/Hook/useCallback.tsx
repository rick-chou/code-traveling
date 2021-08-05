/**
 * useCallback
 * 有一个父组件，其中包含子组件，子组件接收一个函数作为props；
 * 通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，
 * 我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新
 * useCallback(()=>{},[])
 * 第一个参数 是一个函数
 * 第二个参数 是一个数组 是这个函数的依赖项 只有依赖项更新 函数才会重新执行
 */

import React, { useState, useCallback, memo, useEffect } from 'react';
import { Button, message } from 'antd';

interface IProps {
  getSum: () => number;
}

const ComponentWithoutUseCallback = memo(({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithoutUseCallback');
  }, [getSum]);

  return null;
});

const ComponentWithUseCallback = memo(({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithUseCallback');
  }, [getSum]);

  return null;
});

const Parent = () => {
  const [num, setNum] = useState(0);
  const [max, setMax] = useState(100);

  const methodsWithoutUseCallback = () => {
    message.info('methodsWithoutUseCallback');
    let sum = 0;
    for (let i = 0; i < max; i++) {
      sum += i;
    }
    return sum;
  };

  const methodsWithUseCallback = useCallback(() => {
    message.info('methodsWithUseCallback');
    let sum = 0;
    for (let i = 0; i < max; i++) {
      sum += i;
    }
    return sum;
  }, [max]);

  return (
    <div>
      <p>num : {num}</p>
      <Button onClick={() => setNum(num + 1)}>change num</Button>
      <Button onClick={() => setMax((pre) => pre * 2)}>change max</Button>
      <ComponentWithoutUseCallback getSum={methodsWithoutUseCallback} />
      <ComponentWithUseCallback getSum={methodsWithUseCallback} />
    </div>
  );
};

export default Parent;
