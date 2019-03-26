import { createSelector } from 'reselect';
import { playersFilterSelector } from '../PlayersFilter/selectors';

const footballPlayersSelector = (state) => {
	return state.footballPlayers.playersList;
};

export const filteredFootballPlayers = createSelector(
	[ footballPlayersSelector, playersFilterSelector ],
	(playersList, playersFilter) => {
		return playersList.filter(
            (player) => (!playersFilter.filterName || player.name.toUpperCase().includes(playersFilter.filterName.toUpperCase())) && 
            (!playersFilter.filterPosition || player.position === playersFilter.filterPosition) &&
            (!playersFilter.filterAge || player.age === Number(playersFilter.filterAge))
		);
	}
);
