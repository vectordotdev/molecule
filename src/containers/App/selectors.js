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

const selectShowNavigation = createSelector(
  selectRoute(),
  routeState => !routeState.location.pathname.includes('auth'),
)

const selectShowFooter = createSelector(
  selectRoute(),
  routeState => !routeState.location.pathname.includes('auth'),
)

export {
  selectLocation,
  selectTheme,
  selectError,
  selectSuccess,
  selectNotification,
  selectShowNavigation,
  selectShowFooter,
}
