import { TYPES } from '../actions/index';
import { createStore } from 'redux';

const initialState = {
	players: [],
	team1: [],
	team2: [],
	selectedPlayer: {},
	player: {
		name: '',
		goalkeeps: false,
		isPasser: false,
		defense: 0,
		attack: 0,
		overall: /*Number(((defense + attack) / 3).toFixed(2)) ||*/ 0,
	},
};

const playersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPES.GET_PLAYERS:
			return {
				...state,
				players: payload,
			};
		case TYPES.ADD_PLAYER:
			return {
				...state,
				players: payload,
			};
		case TYPES.REMOVE_PLAYER:
			return {
				...state,
				players: players.filter(player => player !== payload),
			};
		case TYPES.REMOVE_ALL_PLAYERS:
			return {
				...state,
				players: [],
			};
		case TYPES.ASSIGN_TEAM1_PLAYER:
			return {
				...state,
				team1: payload,
			};
		case TYPES.ASSIGN_TEAM2_PLAYER:
			return {
				...state,
				team2: payload,
			};
		case TYPES.GET_PLAYER_STATS:
			return {
				...state,
				player: payload,
			};
		case TYPES.SET_PLAYER_STATS:
			return {
				...state,
				player: payload,
			};
		case TYPES.RESET_TEAMS:
			return {
				...state,
				team1: [],
				team2: [],
			};
		default:
			return state;
	}
};
export default createStore(playersReducer);
