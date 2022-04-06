import { createStore, combineReducers } from 'redux';
import counter from './reducers';

const rootReducer = combineReducers({
  counter,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
