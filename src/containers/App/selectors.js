/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = () => state => state.global
const selectRoute = () => state => state.route

const selectSuccess = () => createSelector(
  selectGlobal(),
  globalState => globalState.success,
)

const selectError = () => createSelector(
  selectGlobal(),
  globalState => globalState.error,
)

const selectNotification = () => createSelector(
  selectGlobal(),
  globalState => globalState.notification,
)

const selectTheme = () => createSelector(
  selectGlobal(),
  globalState => globalState.theme,
)

const selectLocation = () => createSelector(
  selectRoute,
  routeState => routeState.location,
)

export {
  selectLocation,
  selectTheme,
  selectError,
  selectSuccess,
  selectNotification,
}
