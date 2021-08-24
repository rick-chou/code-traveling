// useState填补了函数式组件内部不能保存状态的空白
// 更新useState中保存的状态时 都是走的异步更新 对同一个属性的多次更新 会被合并 只取最新的一次
// 使用回调函数更新状态时 可以拿到最新的state

import React, { useState } from 'react';
import { Statistic, Button, Space } from 'antd';
import { LikeOutlined, PieChartOutlined } from '@ant-design/icons';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [otherState, setOtherState] = useState<number>(0);

  // 普通调用
  const addCount = () => {
    setOtherState(otherState + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  // 回调函数
  const addCountByCallback = () => {
    setOtherState(preState => preState + 1);
    setCount(preState => preState + 1);
    setCount(preState => preState + 1);
    setCount(preState => preState + 1);
  };

  // 定时器
  const addCountBySetTimeOut = () => {
    setTimeout(() => {
      setOtherState(otherState + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    });
  };

  // Promise
  const addCountByPromise = () => {
    Promise.resolve().then(() => {
      setOtherState(otherState + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    });
  };

  return (
    <>
      <Space size='large'>
        <Statistic value={`count:${count}`} prefix={<LikeOutlined />} />
        <Statistic value={`other:${otherState}`} prefix={<PieChartOutlined />} />
      </Space>
      <br />
      <br />
      <Button onClick={addCount}>打一个</Button>
      <Button onClick={addCountByCallback}>我要打三个</Button>
      <Button onClick={addCountBySetTimeOut}>我也要打三个</Button>
      <Button onClick={addCountByPromise}>那我也三个</Button>
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
