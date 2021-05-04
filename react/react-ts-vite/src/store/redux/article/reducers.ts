import * as TYPES from './actionTypes'
import { IAction } from '@type/index'
import API from '@utils/api'
const defaultState = {
  list: [],
}

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case TYPES.GET_LIST: {
      API.getList().then((list) => {
        console.log(list)
        return { ...state, list }
      })
    }
    case TYPES.GET_LIST_ASYNC: {
      return { ...state, list: action.list }
    }

    default:
      return state
  }
}
