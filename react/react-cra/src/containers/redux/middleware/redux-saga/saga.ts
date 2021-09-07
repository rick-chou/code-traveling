import { takeEvery, put, delay } from 'redux-saga/effects';
import { ACTION_TYPE } from './store';

// 执行副作用的函数
function* increment(action: any) {
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
  yield takeEvery(ACTION_TYPE.ADD_COUNTER_ASYNC, increment);
  yield takeEvery(ACTION_TYPE.SUB_COUNTER_ASYNC, decrement);
}

export default mySaga;
