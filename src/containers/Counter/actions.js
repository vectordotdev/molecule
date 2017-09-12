import { INCREMENT, DECREMENT } from './constants';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function incrementAsync() {
  return (dispatch) => {
    // This is used for logging purposes
    dispatch({
      type: `async/${INCREMENT}`,
    });
    // This will increment after 500ms
    setTimeout(
      () =>
        dispatch({
          type: INCREMENT,
        }),
      500,
    );
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
