import { IAny } from '@type/index'

const store = {
  state: {
    fullScreen: false,
    loading: false,
  },
  reducers: {
    toggleFullScreen(state: IAny) {
      return { ...state, fullScreen: !state.fullScreen }
    },
  },
  effects: (dispatch: IAny) => ({
    // demo
    async increment(payload: IAny, rootState: IAny) {
      let { num } = rootState.count
      num += payload
      dispatch.count.setNum(num)
    },
  }),
}

export default store
