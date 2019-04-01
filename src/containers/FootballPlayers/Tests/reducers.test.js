import { footballPlayersReducer } from '../reducers';
import { FETCH_FOOTBALL_PLAYERS, FETCH_FOOTBALL_PLAYERS_OK, FETCH_FOOTBALL_PLAYERS_FAIL } from '../actions';

describe('Reducers', () => {
    describe('FETCH_FOOTBALL_PLAYERS', () => {

		const store = { playersList: [ { name: 'Foo', position: 'Bar' } ], fetching: false, error: null };
		const action = {
			type: FETCH_FOOTBALL_PLAYERS,
		};

		it('should update state (fetching)', () => {
            let reducer = footballPlayersReducer(store, action);
			expect(reducer).toEqual({ playersList: [ { name: 'Foo', position: 'Bar' } ], fetching: true, error: null });
		});
    });
    
	describe('FETCH_FOOTBALL_PLAYERS_OK', () => {

		const store = { playersList: [ { name: 'Foo', position: 'Bar' } ], fetching: false, error: null };
		const action = {
			type: FETCH_FOOTBALL_PLAYERS_OK,
			payload: [ { name: 'FooBar', position:'Foo' }, { name: 'BarFoo', position:'Bar' } ]
		};

		it('should update state (list)', () => {
            let reducer = footballPlayersReducer(store, action);
			expect(reducer).toEqual({ playersList: [ { name: 'FooBar', position:'Foo' }, { name: 'BarFoo', position:'Bar' } ], fetching: false, error: null });
		});
	});

	describe('FETCH_FOOTBALL_PLAYERS_FAIL', () => {

		const store = { playersList: [ { name: 'Foo', position: 'Bar' } ], fetching: false, error: null };
		const action = {
			type: FETCH_FOOTBALL_PLAYERS_FAIL,
			payload: 'Foobar error'
        };
        
		it('should update state (with error)', () => {
            let reducer = footballPlayersReducer(store, action);
			expect(reducer).toEqual({ playersList: [ { name: 'Foo', position: 'Bar' } ], fetching: false, error: 'Foobar error' });
		});
	});

});
