import { createSlice } from '@reduxjs/toolkit';

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

const playersSlice = createSlice({
	name: 'players',
	initialState,
	reducers: { // reducer list with its actions
		getPlayers() {
			
		}
	},
});

export const {getPlayers} = playersSlice.actions
export default playersSlice.reducer