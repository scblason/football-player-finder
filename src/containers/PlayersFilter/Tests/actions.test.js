import { filterFootballPlayers } from '../actions';
import { FILTER_PLAYERS } from '../actions';

describe('filterFootballPlayers', () => {
	let result;
	const payload = { filterName: 'Foo Bar' };

	beforeEach(() => {
		result = filterFootballPlayers(payload);
	});

	it('should return action FILTER_PLAYERS and payload as filterName: "Foo Bar"', () => {
		expect(result).toEqual({
			type: FILTER_PLAYERS,
			payload: payload
		});
	});
});
