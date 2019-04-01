import React from 'react';
import { shallow } from 'enzyme';
import PlayersTable from './index';

describe('PlayersTable', () => {
  let wrapper;
  const mock = [
    { name: 'Romelu Lukaku', position: 'Centre-Forward', nationality: 'Belgium', age: 25 },
  ];

  beforeEach(() => {
    wrapper = shallow(<PlayersTable footballPlayers={mock} />);
  });

  describe('render PlayersTable component', () => {
    let table;

    beforeEach(() => {
      table = wrapper.find('table');
    });

    it('should render a table component', () => {
      expect(table).toHaveLength(1);
    });

    describe('thead', () => {
      let thead;
      beforeEach(() => {
        thead = table.find('thead');
      });

      it('should render a thead', () => {
        expect(thead).toHaveLength(1);
      });

      describe('tr', () => {
        let tr;

        beforeEach(() => {
          tr = thead.find('tr');
        });
  
        it('should render a tr', () => {
          expect(tr).toHaveLength(1);
        });

        describe('table headers', () => {
          let th;

          beforeEach(() => {
            th = thead.find('th');
          });
    
          it('toHaveLength(4)', () => {
            expect(th).toHaveLength(4);
          });

          describe('th1', () => {
      
            it('should be "Player"', () => {
              expect(th.at(0).text()).toEqual('Player');
            });
          });

          describe('th2', () => {
            
            it('should be "Position"', () => {
              expect(th.at(1).text()).toEqual('Position');
            });
          });

          describe('th3', () => {
            
            it('should be "Team"', () => {
              expect(th.at(2).text()).toEqual('Team');
            });
          });

          describe('th4', () => {
      
            it('should be "Age"', () => {
              expect(th.at(3).text()).toEqual('Age');
            });
          });
        });
      });
    });

    describe('tbody', () => {
      let tbody;

      beforeEach(() => {
        tbody = table.find('tbody');
      });

      it('should render a tbody', () => {
        expect(tbody).toHaveLength(1);
      });

      describe('tr', () => {
        let tr;

        beforeEach(() => {
          tr = tbody.find('tr');
        });
  
        it('toHaveLength(1)', () => {
          expect(tr).toHaveLength(1);
        });

        describe('tr row', () => {
    
          it('should have first player name as key', () => {
            expect(tr.at(0).key()).toEqual('Romelu Lukaku');
          });

          describe('columns', () => {
            let tds;

            beforeEach(() => {
              tds = tr.at(0).find('td');
            });
      
            it('should render four columns', () => {
              expect(tds).toHaveLength(4);
            });
  
            describe('td1', () => {
        
              it('should render Romelu Lukaku', () => {
                expect(tds.at(0).text()).toEqual('Romelu Lukaku');
              });
            });
  
            describe('td2', () => {
        
              it('should render Centre-Forward', () => {
                expect(tds.at(1).text()).toEqual('Centre-Forward');
              });
            });
  
            describe('td3', () => {

              it('should render Belgium', () => {
                expect(tds.at(2).text()).toEqual('Belgium');
              });
            });
  
            describe('td4', () => {
        
              it('should render 25 years old', () => {
                expect(tds.at(3).text()).toEqual('25');
              });
            });
          });
        });
      });
    });
  });
});
