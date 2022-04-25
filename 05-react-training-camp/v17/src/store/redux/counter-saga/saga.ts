import { takeEvery, put, delay } from 'redux-saga/effects';
import { ACTION_TYPE } from './store';

// 执行副作用的函数
function* increment(action: any) {
  // 延迟一秒 模拟异步 可以在这里用try catch语法块返回成功/失败的action
  yield delay(1000);
  yield put({
    type: ACTION_TYPE.ADD_COUNTER,
    payload: action.payload,
  });
}

function* decrement(action: any) {
  yield delay(1000);
  yield put({
    type: ACTION_TYPE.SUB_COUNTER,
    payload: action.payload,
  });
}

function* mySaga() {
  // 组件中发起action的type应该和这里的一致
  yield takeEvery(ACTION_TYPE.ADD_COUNTER_ASYNC, increment);
  yield takeEvery(ACTION_TYPE.SUB_COUNTER_ASYNC, decrement);
}

export default mySaga;
