// 导入核心API 创建Store
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

export interface IStore {
  count: number;
}

export interface IAction {
  type: string;
  [key: string]: any;
}

// 定义我们的 Action Type
enum ACTION_TYPE {
  ADD_COUNTER = 'ADD_COUNTER',
  SUB_COUNTER = 'SUB_COUNTER',
}

// 对外暴露 Action Creators 用于组件调用
export const addCounter = (payload: number) => ({
  type: ACTION_TYPE.ADD_COUNTER,
  payload,
});

export const _subCounter = (payload: number) => ({
  type: ACTION_TYPE.SUB_COUNTER,
  payload,
});

export const subCounter = (payload: number) => {
  return (dispatch: any, getState: any) =>
    setTimeout(() => {
      let { count } = getState();
      count = count + payload;
      dispatch(_subCounter(count));
    }, 1000);
};

// 创建一个初始化的Store
const initStore: IStore = {
  count: 0,
};

// 创建Reducer 用于管理 View 派发过来的 Action
const reducer = (store = initStore, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_COUNTER: {
      let { count } = store;
      setTimeout(() => {
        count = count + action.payload;
      }, 1000);
      return { ...store, count };
    }
    case ACTION_TYPE.SUB_COUNTER:
      return { ...store, count: action.payload };
    default:
      return store;
  }
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

// 创建 Store 这里我们还开启了 Redux DEVTools
export const store = createStore(reducer, enhancer);
