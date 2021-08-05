/**
 * useEffect
 * 允许函数组件执行副作用操作 在一定程度上弥补了生命周期的缺席
 * 可以接收两个参数，分别是回调函数与依赖数组 useEffect(callBack, [])
 * 第一个参数 函数形式 可实现等同于componentDidMount shouldComponentUpdate componentWillUnmount
 * 并且可以返回一个函数 用来消除副作用 类似componentWillUnmount 可以做一些事件的解绑 定时器的关闭等
 * 第二个参数 数组 状态依赖项 实现性能优化 如果传[] 则等同于不开启shouldComponentUpdate
 */

import React, { FC, useEffect, useState } from 'react';

import { Button, message } from 'antd';

const App: FC = () => {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    message.info('render');
    const timer = setTimeout(() => {});

    return () => {
      clearTimeout(timer);
      message.info('消除副作用');
    };
  }, [state]);

  return (
    <div>
      <Button onClick={() => setState(state + 1)}>{state}</Button>
      <br />
      <br />
    </div>
  );
};

export default App;
