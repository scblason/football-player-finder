import { playersFilterSelector } from '../selectors';

describe('playersFilterSelector', () => {
	it('should return the playersFilter', () => {
		const store = {
			playersFilter: { filterName: 'Foo Bar', filterPosition: 'fooBar', filterAge: 20 }
		};

		expect(playersFilterSelector(store)).toEqual({
			filterName: 'Foo Bar',
			filterPosition: 'fooBar',
			filterAge: 20
		});
	});
});
