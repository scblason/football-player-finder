import { playersFilterReducer } from '../reducers';
import { FILTER_PLAYERS } from '../actions';

describe('Reducer', () => {
	it('should return action payload', () => {
		const state = { bar: 'foo' };
		const action = { type: FILTER_PLAYERS, payload: { foo: 'bar' } };
		const reducer = playersFilterReducer(state, action);
		expect(reducer).toEqual({ foo: 'bar' });
	});
});
