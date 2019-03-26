export const FILTER_PLAYERS = 'FILTER_PLAYERS';

export function filterFootballPlayers(filter) {
  return {
    type: FILTER_PLAYERS,
    payload: filter
  }
}
