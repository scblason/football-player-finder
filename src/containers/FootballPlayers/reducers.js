import { FETCH_FOOTBALL_PLAYERS, FETCH_FOOTBALL_PLAYERS_OK, FETCH_FOOTBALL_PLAYERS_FAIL } from './actions';

export const initialState = {
	playersList: [],
	fetching: false,
	error: null
};

export function footballPlayersReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_FOOTBALL_PLAYERS:
			return { ...state, fetching: true };

		case FETCH_FOOTBALL_PLAYERS_OK:
			return { ...state, error: null, playersList: action.payload, fetching: false };

		case FETCH_FOOTBALL_PLAYERS_FAIL:
			return { ...state, error: action.payload, fetching: false };

		default:
			return state;
	}
}
