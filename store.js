import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './reducers/playersReducer';

const store = configureStore({
	reducer: {
		players: playersReducer,
	},
});
/*
import {
	legacy_createStore as createStore,
	compose,
	applyMiddleware,
} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
	reducers,
	// compose(
	// 	applyMiddleware(thunk),
	// 	typeof window === 'object' &&
	// 		window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
	// 		? window.__REDUX_DEVTOOLS_EXTENSION__()
	// 		: f => f
	// )
);

*/
export default store;
