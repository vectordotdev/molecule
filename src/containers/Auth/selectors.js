import { createSelector } from 'reselect';

/**
 * Direct selector to the auth state domain
 */

const selectAuthDomain = () => state => state.get('auth');

/**
 * Other specific selectors
 */

const selectCurrentUser = () => createSelector(
   selectAuthDomain(),
   authState => authState.get('user'),
 );

/**
 * Default selector used by Auth
 */

const selectAuth = () => createSelector(
  selectAuthDomain(),
  substate => substate.toJS(),
);

export default selectAuth;
export {
  selectAuthDomain,
  selectCurrentUser,
};
