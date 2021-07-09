import { SET_USER_NAME } from './actionTypes'

export const setUsername = (username: string) => ({
  type: SET_USER_NAME,
  username,
})
