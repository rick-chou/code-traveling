import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import mySaga from './saga';

export interface IStore {
  count: number;
}

// 定义我们的 Action Type
export enum ACTION_TYPE {
  ADD_COUNTER = 'ADD_COUNTER',
  SUB_COUNTER = 'SUB_COUNTER',
  ADD_COUNTER_ASYNC = 'ADD_COUNTER_ASYNC',
  SUB_COUNTER_ASYNC = 'SUB_COUNTER_ASYNC',
}

// 注意这边的type类型 和saga文件中takeEvery函数中的类型一致
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

// 启用redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建saga中间件对象
const sagaMiddleware = createSagaMiddleware();

// 注册中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, logger));

// 创建 Store 这里我们还开启了 Redux DEVTools
export const store = createStore(reducer, enhancer);

// 必须放在createStore后 再启动saga
sagaMiddleware.run(mySaga);
