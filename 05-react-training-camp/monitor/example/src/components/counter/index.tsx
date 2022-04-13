import { useState } from 'react';
import { Button, Space, Card } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { animated, config, useSpring } from 'react-spring';

function Number(props: { count: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: props.count,
    delay: 200,
    config: config.molasses,
  });

  return <animated.div>{number.to((c) => c.toFixed(1))}</animated.div>;
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Card
      style={{
        borderRadius: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}
      hoverable
    >
      <Space size={'large'}>
        <Button
          onClick={() => setCount(count + 1)}
          size="large"
          shape="circle"
          icon={<CaretUpOutlined />}
        />
        <div className="text-3xl">
          <Number count={count}></Number>
        </div>
        <Button
          onClick={() => setCount(count - 1)}
          size="large"
          shape="circle"
          icon={<CaretDownOutlined />}
        />
      </Space>
    </Card>
  );
};

export default Counter;
