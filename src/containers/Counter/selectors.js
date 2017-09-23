import { createSelector } from 'reselect'

/**
 * Direct selector to the counter state domain
 */

const selectCounterDomain = () => state => state.counter

/**
 * Other specific selectors
 */

const selectCount = () => createSelector(
  selectCounterDomain(),
  counterState => counterState.count,
)

export default selectCount
export {
  selectCounterDomain,
  selectCount,
}
