import { apiGetFootbalPlayers } from './api';

export const FETCH_FOOTBALL_PLAYERS = 'FETCH_FOOTBALL_PLAYERS';
export const FETCH_FOOTBALL_PLAYERS_OK = 'FETCH_FOOTBALL_PLAYERS_OK';
export const FETCH_FOOTBALL_PLAYERS_FAIL = 'FETCH_FOOTBALL_PLAYERS_FAIL';

export function getFootballPlayers() {
	return (dispatch) => {
		dispatch(fetchFootballPlayers());
		return apiGetFootbalPlayers().then((data) => {
			if (data) dispatch(fetchFootballPlayersOk(data));
			else dispatch(fetchFootballPlayersFail('The service failed'));
		});
	};
}

function fetchFootballPlayers() {
	return {
		type: FETCH_FOOTBALL_PLAYERS
	};
}

function fetchFootballPlayersOk(data) {
	return {
		type: FETCH_FOOTBALL_PLAYERS_OK,
		payload: data
	};
}

function fetchFootballPlayersFail(error) {
	return {
		type: FETCH_FOOTBALL_PLAYERS_FAIL,
		payload: error
	};
}
