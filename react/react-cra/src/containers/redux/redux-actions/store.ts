import { createStore } from 'redux';
import { createActions, handleActions, combineActions } from 'redux-actions';

export interface IStore {
  count: number;
}

export interface IAction {
  type: string;
  [key: string]: any;
}

const { increment, decrement } = createActions({
  INCREMENT: (count = 1) => ({ count }),
  DECREMENT: (count = 1) => ({ count: -count }),
});

const initStore: IStore = {
  count: 0,
};

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (state: IStore, { payload: { count } }: number) => {
      return { ...state, counter: state.count + count };
    },
  },
  initStore,
);

export const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
