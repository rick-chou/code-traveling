import { createStore } from 'redux';
import { createActions, handleActions, combineActions } from 'redux-actions';

// export interface IStore {
//   count: number;
// }

// export interface IAction {
//   type: string;
//   [key: string]: any;
// }

export const { addCounter, subCounter } = createActions({
  INCREMENT: (count = 1) => ({ count }),
  DECREMENT: (count = 1) => ({ count: -count }),
});

const initStore = {
  count: 0,
};

const reducer = handleActions(
  {
    [combineActions(addCounter, subCounter)]: (state, { payload: { count } }) => {
      return { ...state, counter: state.count + count };
    },
  },
  initStore,
);

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
