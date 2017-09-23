import { SET_LOADING } from 'containers/App/constants'

export default store => next => action => {
  if (action.meta && action.meta.triggerLoading) {
    store.dispatch({
      type: SET_LOADING,
      payload: {
        loading: true,
      },
    })
  }

  if (action.meta && action.meta.resolveLoading) {
    store.dispatch({
      type: SET_LOADING,
      payload: {
        loading: false,
      },
    })
  }

  next(action)
}
