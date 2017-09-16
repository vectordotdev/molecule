import { createLogic } from 'redux-logic'
import { INCREMENT_ASYNC } from './constants'
import { increment } from './actions'

const incrementAsyncLogic = createLogic({
  type: INCREMENT_ASYNC,
  debounce: 500,
  latest: true,
  process () {
    return increment()
  },
})

export default [incrementAsyncLogic]
