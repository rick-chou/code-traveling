import { useState, useCallback, useEffect } from 'react';
import { Button, message } from 'antd';

interface IProps {
  getSum: () => number;
}

const ComponentWithoutUseCallback = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithoutUseCallback');
  }, [getSum]);

  return null;
};

const ComponentWithUseCallback = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithUseCallback');
  }, [getSum]);

  return null;
};

const Parent = () => {
  const [num, setNum] = useState(0);
  const [max, setMax] = useState(100);

  // 只要父组件更新 子组件就会更新
  const methodsWithoutUseCallback = () => {
    message.info('methodsWithoutUseCallback');
    return max;
  };

  // 只有当max更新时 函数才会重新执行 子组件才会更新
  const methodsWithUseCallback = useCallback(() => {
    message.info('methodsWithUseCallback');
    return max;
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
