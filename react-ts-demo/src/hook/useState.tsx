import React, { useState } from 'react';
import { Statistic, Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Statistic title="Feedback" value={count} prefix={<LikeOutlined />} />
      <Button onClick={() => setCount(count)}>+1</Button>
    </>
  );
};

export default Counter;
