import { createStore } from 'redux';

const initialState = { players: [] };

const reducer = (state = initialState, action) => {
	return state;
};

export default createStore(reducer);
