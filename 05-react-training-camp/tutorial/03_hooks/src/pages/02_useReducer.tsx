import { useReducer } from 'react';
import { Button } from 'antd';

enum Actions {
  ADD_COUNT_VALUE = 'ADD_COUNT_VALUE',
  SUB_COUNT_VALUE = 'SUB_COUNT_VALUE',
}

interface IState {
  count: number;
}

interface IAction {
  type: Actions;
  payload?: number;
}

const myReducers = (state: IState, action: IAction) => {
  const { payload = 1 } = action;
  switch (action.type) {
    case Actions.ADD_COUNT_VALUE:
      return {
        ...state,
        count: state.count + payload,
      };
    case Actions.SUB_COUNT_VALUE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(myReducers, { count: 0 });

  return (
    <div>
      <h1>当前计数：{state.count}</h1>
      <Button
        onClick={() => dispatch({ type: Actions.ADD_COUNT_VALUE, payload: 2 })}
      >
        +2
      </Button>
      <Button onClick={() => dispatch({ type: Actions.SUB_COUNT_VALUE })}>
        -1
      </Button>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Count />
      <Count />
    </>
  );
}
