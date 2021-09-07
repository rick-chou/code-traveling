import { useState } from 'react';
import { Button, Input } from 'antd';
import { connect, Provider } from 'react-redux';
import { store, addCounter, subCounter, IStore } from './store';
import { addCounterAsync } from './middleware';

interface IProps {
  count: number;
  addCounter: any;
  subCounter: any;
}

function Counter(props: IProps) {
  const { subCounter, count } = props;

  const [payload, setPayload] = useState<number>(1);

  const { dispatch } = store;

  return (
    <>
      <Input value={payload} onChange={v => setPayload(parseInt(v.target.value))} />
      <Button onClick={() => dispatch(addCounterAsync(payload))}>+</Button>
      <Button>{count}</Button>
      <Button onClick={() => dispatch(subCounter(payload))}>-</Button>
    </>
  );
}

const mapDispatchToProps = () => ({
  addCounter: (payload: number) => addCounter(payload),
  subCounter: (payload: number) => subCounter(payload),
});

const mapStateToProps = (store: IStore) => ({
  count: store.count,
});

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default function Root() {
  return (
    <Provider store={store}>
      <CounterWrapper />
    </Provider>
  );
}
