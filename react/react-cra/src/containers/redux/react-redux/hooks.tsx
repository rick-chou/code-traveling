import { useState } from 'react';
import { Button, Input } from 'antd';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, addCounter, subCounter, IStore } from './store';

function Counter() {
  const { count } = useSelector((store: IStore) => store);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState<number>(1);

  return (
    <>
      <Input value={payload} onChange={v => setPayload(parseInt(v.target.value))} />
      <Button onClick={() => dispatch(addCounter(payload))}>+</Button>
      <Button>{count}</Button>
      <Button onClick={() => dispatch(subCounter(payload))}>-</Button>
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
