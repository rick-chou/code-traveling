import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import home from './home/reducers';
import article from './article/reducers';

const rootReducer = combineReducers({
  home,
  article,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, logger));

export default createStore(rootReducer, enhancer);
