import appLogic from './containers/App/logic'
import counterLogic from './containers/Counter/logic'

// Combine sagas
export default [
  ...appLogic,
  ...counterLogic,
]
