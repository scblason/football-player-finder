import React from 'react';
import { PlayersFilter } from './index';
import { POSITIONS_SELECT } from './index';
import { shallow } from 'enzyme';

describe('PlayersFilter', () => {
	let playersFilter;
	const filterMockFn = jest.fn();
	const state = {
		filterName: 'Romelu Lukaku',
		filterAge: 25,
		filterPosition: 'Centre-Forward'
	};

	beforeEach(() => {
		playersFilter = shallow(<PlayersFilter filterFootballPlayers={filterMockFn} />);
		playersFilter.setState(state);
	});

	//{ name: 'Romelu Lukaku', position: 'Centre-Forward', nationality: 'Belgium', age: 25 },
	describe('handleSearch', () => {
		beforeEach(() => {
			playersFilter.instance().handleSearch();
		});

		it('should called method with state data', () => {
			expect(filterMockFn).toHaveBeenCalledWith(state);
		});
    });
    

	describe('render', () => {
		let divs;

		beforeEach(() => {
			divs = playersFilter.find('div');
		});

		it('should have 5 divs', () => {
			expect(divs).toHaveLength(5);
		});

		it('should have className "container" in root div', () => {
			expect(divs.at(0).prop('className')).toEqual('container');
		});

		it('should have className "three columns" in div 1', () => {
			expect(divs.at(1).prop('className')).toEqual('three columns');
		});

		it('should have className "three columns" in div 2', () => {
			expect(divs.at(2).prop('className')).toEqual('three columns');
		});

		it('should have className "three columns" in div 3', () => {
			expect(divs.at(3).prop('className')).toEqual('three columns');
		});

		it('should have className "three columns" in div 4', () => {
			expect(divs.at(4).prop('className')).toEqual('three columns');
		});

		describe('Name', () => {
			let nameInput;
			beforeEach(() => {
				nameInput = divs.at(1).find('input');
			});

			it('should have className "u-full-width"', () => {
				expect(nameInput.prop('className')).toEqual('u-full-width');
			});

			it('should have type text', () => {
				expect(nameInput.prop('type')).toEqual('text');
            });
            
            it('should have type value as state', () => {
				expect(nameInput.prop('value')).toEqual('Romelu Lukaku');
            });
            
            describe('handleName', () => {
                beforeEach(()=>{
                    playersFilter.instance().handleName({target:{value:'foo bar'}});
                });
                
                it('should have type value as handleName', () => {
                    expect(playersFilter.state('filterName')).toEqual('foo bar');
                });
            });
        });
        
        describe('Position', () => {
			let positionSelect;
			beforeEach(() => {
				positionSelect = divs.at(2).find('select');
			});

			it('should have className "u-full-width"', () => {
				expect(positionSelect.prop('className')).toEqual('u-full-width');
			});

            it('should have the correct amount of options', () => {
				expect(positionSelect.find('option')).toHaveLength(POSITIONS_SELECT.length);
            });
            
            describe('handlePosition', () => {
                beforeEach(()=>{
                    playersFilter.instance().handlePosition({target:{value:'Attacking Midfield'}});
                });
                
                it('should have type value as handlePosition', () => {
                    expect(playersFilter.state('filterPosition')).toEqual('Attacking Midfield');
                });
            });
        });
        
        describe('Age', () => {
			let inputAge;
			beforeEach(() => {
                inputAge = divs.at(3).find('input');
			});

			it('should have className "u-full-width"', () => {
				expect(inputAge.prop('className')).toEqual('u-full-width');
            });
            
            it('should have type number', () => {
				expect(inputAge.prop('type')).toEqual('number');
            });

            it('should have type value as state', () => {
				expect(inputAge.prop('value')).toEqual(25);
            });
            
            describe('handleAge', () => {
                beforeEach(()=>{
                    playersFilter.instance().handleAge({target:{value:2}});
                });
                
                it('should have type value as handleAge', () => {
                    expect(playersFilter.state('filterAge')).toEqual(2);
                });
            });
        });
        
        describe('searchButton', () => {
			let searchButton;
			beforeEach(() => {
				searchButton = divs.at(4).find('input');
			});

			it('should have className "button-primary" in button', () => {
				expect(searchButton.prop('className')).toEqual('button-primary');
            });
            
            it('should have type button', () => {
				expect(searchButton.prop('type')).toEqual('button');
            });

		});
	});
});
