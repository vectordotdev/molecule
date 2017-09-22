import appLogic from './containers/App/logic'
import counterLogic from './containers/Counter/logic'

// Combine logic
export default [
  ...appLogic,
  ...counterLogic,
]
