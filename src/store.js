import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";
import { footballPlayersReducer } from "./containers/FootballPlayers/reducers";
import { playersFilterReducer } from "./containers/PlayersFilter/reducers";

const rootReducer = combineReducers({
  footballPlayers: footballPlayersReducer,
  playersFilter: playersFilterReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
