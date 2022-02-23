import { SET_USER_NAME } from './actionTypes'
import { IAction } from '@type/index'

const defaultState = {
  username: 'chou',
}

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, username: action.username }
    default:
      return state
  }
}
