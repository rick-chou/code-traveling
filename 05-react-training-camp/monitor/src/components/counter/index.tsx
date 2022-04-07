import { useState } from 'react';
import { Button } from 'antd';
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
    <div className="bg-white flex flex-col justify-center items-center h-36 rounded-lg">
      <div className="text-3xl mb-3 flex">
        count: <Number count={count}></Number>
      </div>
      <div>
        <Button onClick={() => setCount(count + 1)} size="large">
          + 加
        </Button>
        <Button onClick={() => setCount(count - 1)} size="large">
          - 减
        </Button>
      </div>
    </div>
  );
};

export default Counter;
