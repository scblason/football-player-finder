import { FILTER_PLAYERS } from './actions';

export function playersFilterReducer(state = {}, action) {
  switch (action.type) {
    case FILTER_PLAYERS:
      return { ...action.payload };

    default:
      return state;
  }
}
