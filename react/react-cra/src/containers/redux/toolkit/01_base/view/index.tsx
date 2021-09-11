import { useState } from 'react';
import { Button, Input } from 'antd';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState } from '../models/store';
import { decrement, increment, incrementByAmount } from '../models/modules/counterSlice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState<number>(1);

  return (
    <>
      <Input value={payload} onChange={v => setPayload(parseInt(v.target.value))} />
      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Button onClick={() => dispatch(incrementByAmount(payload))}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
      <Button>{count}</Button>
    </>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
