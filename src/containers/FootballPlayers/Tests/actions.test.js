import {
	fetchFootballPlayers,
	fetchFootballPlayersOk,
	fetchFootballPlayersFail,
	FETCH_FOOTBALL_PLAYERS,
	FETCH_FOOTBALL_PLAYERS_OK,
	FETCH_FOOTBALL_PLAYERS_FAIL
} from '../actions';

describe('Actions', () => {
	let payload;
	beforeEach(() => {
		payload = { foo: 'Bar' };
	});

	it('should return action FETCH_FOOTBALL_PLAYERS', () => {
		expect(fetchFootballPlayers()).toEqual({
			type: FETCH_FOOTBALL_PLAYERS
		});
	});

	it('should return action FETCH_FOOTBALL_PLAYERS_OK with payload', () => {
		expect(fetchFootballPlayersOk(payload)).toEqual({
			type: FETCH_FOOTBALL_PLAYERS_OK,
			payload
		});
	});

	it('should return action FETCH_FOOTBALL_PLAYERS_FAIL with payload', () => {
		expect(fetchFootballPlayersFail(payload)).toEqual({
            type: FETCH_FOOTBALL_PLAYERS_FAIL,
            payload
		});
	});
});
