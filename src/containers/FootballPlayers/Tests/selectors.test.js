import { footballPlayersSelector, filteredFootballPlayers } from '../selectors';

describe('Selectors', () => {
	let store;
	beforeEach(() => {
		store = {
			playersFilter: { filterName: 'Foo Bar' },
			footballPlayers: {
				playersList: [
					{
						name: 'Foo Bar',
						position: 'fooBar',
						nationality: 'Bar',
						dateOfBirth: '1999-05-13'
					},
					{
						name: 'Bar Foo',
						position: 'barFoo',
						nationality: 'Foo',
						dateOfBirth: '1981-02-27'
					}
				]
			}
		};
	});

	it('should return all the players', () => {
		expect(footballPlayersSelector(store)).toEqual(store.footballPlayers.playersList);
	});

	it('should return filtered players', () => {
		expect(filteredFootballPlayers(store)).toEqual([
			{
				name: 'Foo Bar',
				position: 'fooBar',
				nationality: 'Bar',
				dateOfBirth: '1999-05-13'
			}
		]);
	});
});
