import { Provider, useSelector, useDispatch } from 'react-redux';
import { increment, decrement, IStore } from './store';
import { store } from './store';
import { Button } from 'antd';

const Counter = () => {
  const { count } = useSelector((state: IStore) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {count}</h1>
      <br />
      <Button onClick={() => dispatch(increment(1))}>+1</Button>
      <Button onClick={() => dispatch(decrement(1))}>-1</Button>
      <Button onClick={() => dispatch(decrement(5))}>-5</Button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
