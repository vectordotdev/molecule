/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => state => state.global;

// const selectLoading = () => createSelector(
//   selectGlobal(),
//   (globalState) => globalState.get('loading')
// );

const selectSuccess = () => createSelector(
  selectGlobal(),
  globalState => globalState.success,
);

const selectError = () => createSelector(
  selectGlobal(),
  globalState => globalState.error,
);

const selectNotification = () => createSelector(
  selectGlobal(),
  globalState => globalState.notification,
);

const selectTheme = () => createSelector(
  selectGlobal(),
  globalState => globalState.theme,
);

const makeSelectLocationState = () => {
  let prevRoutingState;

  return (state) => {
    const routingState = state.route; // or state.route

    if (!Object.is(routingState, prevRoutingState)) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  };
};

export {
  makeSelectLocationState,
  selectTheme,
  selectError,
  selectSuccess,
  selectNotification,
};
