import React, { useEffect, useState } from 'react';
import { Statistic, Button, Space } from 'antd';
import { LikeOutlined, AreaChartOutlined } from '@ant-design/icons';

import { Markdown } from '@nanshu/ui';

const markdownText = `
~~~js
/**
 * - useState 填补了函数式组件内部不能保存状态的空白
 * - 更新 useState 中保存的状态时 都是走的异步更新 对同一个属性的多次更新 会被合并 只取最新的一次
 * - 使用回调函数更新状态时 可以拿到最新的 state
 * 
 * DEMO 在每个方法内 分别调用两次 setA 和 setB 然后监听 A 和 B 的变化 每当有变化时 renderCount ++
 */
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [renderCount, setRenderCount] = useState<number>(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [a, b]);

  // 普通调用
  const addCount = () => {
    setA(a + 1);
    setA(a + 1);
    setB(b + 1);
    setB(b + 1);
  };

  // 回调函数
  const addCountByCallback = () => {
    setA((preState) => preState + 1);
    setA((preState) => preState + 1);
    setB((preState) => preState + 1);
    setB((preState) => preState + 1);
  };

  // 定时器
  const addCountBySetTimeOut = () => {
    setTimeout(() => {
      setA(a + 1);
      setA(a + 1);
      setB(b + 1);
      setB(b + 1);
    });
  };

  // Promise
  const addCountByPromise = () => {
    Promise.resolve().then(() => {
      setA(a + 1);
      setA(a + 1);
      setB(b + 1);
      setB(b + 1);
    });
  };
~~~
`;

const Counter: React.FunctionComponent = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [renderCount, setRenderCount] = useState<number>(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [a, b]);

  // 普通调用
  const addCount = () => {
    setA(a + 1);
    setA(a + 1);
    setB(b + 1);
    setB(b + 1);
  };

  // 回调函数
  const addCountByCallback = () => {
    setA((preState) => preState + 1);
    setA((preState) => preState + 1);
    setB((preState) => preState + 1);
    setB((preState) => preState + 1);
  };

  // 定时器
  const addCountBySetTimeOut = () => {
    setTimeout(() => {
      setA(a + 1);
      setA(a + 1);
      setB(b + 1);
      setB(b + 1);
    });
  };

  // Promise
  const addCountByPromise = () => {
    Promise.resolve().then(() => {
      setA(a + 1);
      setA(a + 1);
      setB(b + 1);
      setB(b + 1);
    });
  };

  return (
    <>
      <Markdown children={markdownText} title={'useState'} />
      <Space size="large">
        <Statistic value={`A:${a}`} prefix={<LikeOutlined />} />
        <Statistic value={`B:${b}`} prefix={<LikeOutlined />} />
        <Statistic
          value={`renderCount:${renderCount}`}
          prefix={<AreaChartOutlined />}
        />
      </Space>
      <br />
      <br />
      <Button onClick={addCount}>普通调用</Button>
      <Button onClick={addCountByCallback}>回调函数</Button>
      <Button onClick={addCountBySetTimeOut}>定时器</Button>
      <Button onClick={addCountByPromise}>Promise</Button>
      <br />
      <br />
      <hr />
      <br />
      <p>
        <b>同一个任务只有使用回调函数的写法才不会合并</b>
      </p>
    </>
  );
};

export default Counter;
