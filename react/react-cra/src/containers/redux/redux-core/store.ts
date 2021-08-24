import { createStore } from 'redux';

interface IStore {
  count: number;
}

interface IAction {
  type: string;
  [key: string]: any;
}

enum ACTION_TYPE {
  ADD_COUNTER = 'ADD_COUNTER',
  SUB_COUNTER = 'SUB_COUNTER',
}

export const addCounter = (payload: number) => ({
  type: ACTION_TYPE.ADD_COUNTER,
  payload,
});

export const subCounter = (payload: number) => ({
  type: ACTION_TYPE.SUB_COUNTER,
  payload,
});

const initStore: IStore = {
  count: 0,
};

const reducer = (store = initStore, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_COUNTER:
      return { ...store, count: store.count + action.payload };
    case ACTION_TYPE.SUB_COUNTER:
      return { ...store, count: store.count - action.payload };
    default:
      return store;
  }
};

export const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
