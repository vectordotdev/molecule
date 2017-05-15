/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => state => state.get('global');

// const selectLoading = () => createSelector(
//   selectGlobal(),
//   (globalState) => globalState.get('loading')
// );

const selectSuccess = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('success'),
);

const selectError = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('error'),
);

const selectNotification = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('notification'),
);

const selectTheme = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('theme'),
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  makeSelectLocationState,
  selectTheme,
  selectError,
  selectSuccess,
  selectNotification,
};
