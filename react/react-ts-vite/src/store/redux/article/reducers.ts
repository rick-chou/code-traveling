import * as TYPES from './actionTypes'
import { IAction } from '@type/index'
import API from '@utils/api'
const defaultState = {
  list: [],
}

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case TYPES.GET_LIST: {
      API.getList((res) => console.log(res))
    }
    default:
      return state
  }
}
