import { createLogic } from 'redux-logic'

// dynamic route change example:
// import { push } from 'react-router-redux'
// dispatch(push('/url'))

const incrementAsyncLogic = createLogic({
  type: INCREMENT_ASYNC,
  debounce: 500,
  latest: true,
  async process ({ api }) {
    const users = await api.get('/posts')
    console.log(users.body.data)
  },
})

export default [incrementAsyncLogic]
