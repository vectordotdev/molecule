import { createSelector } from 'reselect';

/**
 * Direct selector to the counter state domain
 */

const selectCounterDomain = () => state => state.get('counter');

/**
 * Other specific selectors
 */

const selectCount = () => createSelector(
   selectCounterDomain(),
   counterState => counterState.get('count'),
 );

/**
 * Default selector used by Counter
 */

const selectCounter = () => createSelector(
  selectCounterDomain(),
  substate => substate.toJS(),
);

export default selectCounter;
export {
  selectCounterDomain,
  selectCount
};
