import { createLogic } from 'redux-logic'
import { INCREMENT_ASYNC } from './constants'
import { increment } from './actions'

const incrementAsyncLogic = createLogic({
  type: INCREMENT_ASYNC,
  debounce: 500,
  latest: true,
  async process ({ api }) {
    const users = await api.get('/users')
    console.log(users.body.data)
    return increment()
  },
})

export default [incrementAsyncLogic]
