import React, { useEffect, useState } from 'react';
import { Statistic, Button, Space } from 'antd';
import {
  LikeOutlined,
  AreaChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [other, setOther] = useState<number>(0);
  const [renderCount, setRenderCount] = useState<number>(0);

  useEffect(() => {
    setRenderCount(count + 1);
  }, [count]);

  // 普通调用
  const addCount = () => {
    setOther(other + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  // 回调函数
  const addCountByCallback = () => {
    setOther((preState) => preState + 1);
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
  };

  // 定时器
  const addCountBySetTimeOut = () => {
    setTimeout(() => {
      setOther(other + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    });
  };

  // Promise
  const addCountByPromise = () => {
    Promise.resolve().then(() => {
      setOther(other + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    });
  };

  return (
    <>
      <Space size="large">
        <Statistic value={`count:${count}`} prefix={<LikeOutlined />} />
        <Statistic value={`other:${other}`} prefix={<PieChartOutlined />} />
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
