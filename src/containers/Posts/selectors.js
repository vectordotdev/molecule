import { createSelector } from 'reselect'

/**
 * Direct selector to the counter state domain
 */

const selectPostsDomain = () => state => state.counter

/**
 * Other specific selectors
 */

const selectPosts = () => createSelector(
  selectPostsDomain(),
  postsState => postsState.posts,
)

/**
 * Default selector used by Posts
 */

const selectCounter = () => createSelector(
  selectCounterDomain(),
  substate => substate.toJS(),
)

export default selectCounter
export {
  selectCounterDomain,
  selectCount,
}
