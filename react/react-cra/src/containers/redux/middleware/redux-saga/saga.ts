import { takeEvery, put } from 'redux-saga/effects';
import { addCounter, ACTION_TYPE } from './store';

// 执行副作用的函数
function* increment(action: any, ...arg: any) {
  yield put(addCounter(action.payload));
}

function* mySaga() {
  yield takeEvery(ACTION_TYPE.ADD_COUNT_ASYNC, increment);
}

export default mySaga;
