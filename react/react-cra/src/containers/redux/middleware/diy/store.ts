import { createStore } from 'redux';

export interface IStore {
  count: number;
}

export interface IAction {
  type: string;
  [key: string]: any;
}

const ADD_COUNTER = 'ADD_COUNTER';
const SUB_COUNTER = 'SUB_COUNTER';

export const addCounter = (payload: number) => ({
  type: ADD_COUNTER,
  payload,
});

export const subCounter = (payload: number) => ({
  type: SUB_COUNTER,
  payload,
});

const initStore: IStore = {
  count: 0,
};

const reducer = (store = initStore, action: IAction) => {
  switch (action.type) {
    case ADD_COUNTER:
      return { ...store, count: store.count + action.payload };
    case SUB_COUNTER:
      return { ...store, count: store.count - action.payload };
    default:
      return store;
  }
};

export const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
