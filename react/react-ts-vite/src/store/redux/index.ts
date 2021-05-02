import { createStore, combineReducers } from 'redux'
import home from './home/reducers'
import article from './article/reducers'

const rootReducer = combineReducers({
  home,
  article,
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
