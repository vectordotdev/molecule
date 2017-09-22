import { createLogic } from 'redux-logic'

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
