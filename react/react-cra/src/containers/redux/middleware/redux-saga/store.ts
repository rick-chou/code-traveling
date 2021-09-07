import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

export interface IStore {
  count: number;
}

export interface IAction {
  type: string;
  [key: string]: any;
}

// 定义我们的 Action Type
export enum ACTION_TYPE {
  ADD_COUNTER = 'ADD_COUNTER',
  SUB_COUNTER = 'SUB_COUNTER',
  ADD_COUNTER_ASYNC = 'ADD_COUNTER_ASYNC',
  SUB_COUNTER_ASYNC = 'SUB_COUNTER_ASYNC',
}

export const increment = (payload: number) => ({
  type: ACTION_TYPE.ADD_COUNTER_ASYNC,
  payload,
});

export const decrement = (payload: number) => ({
  type: ACTION_TYPE.SUB_COUNTER_ASYNC,
  payload,
});

// 创建一个初始化的Store
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

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// 创建 Store 这里我们还开启了 Redux DEVTools
export const store = createStore(reducer, enhancer);

sagaMiddleware.run(mySaga);
