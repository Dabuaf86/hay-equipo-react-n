export const TYPES = {
	ADD_PLAYER: 'ADD_PLAYER',
	REMOVE_PLAYER: 'REMOVE_PLAYER',
	GET_PLAYERS: 'GET_PLAYERS',
	GET_PLAYER_STATS: 'GET_PLAYER_STATS',
	SET_PLAYER_STATS: 'SET_PLAYER_STATS',
	REMOVE_ALL_PLAYERS: 'REMOVE_ALL_PLAYERS',
	SET_TEAM1_PLAYER: 'SET_TEAM1_PLAYER',
	SET_TEAM2_PLAYER: 'SET_TEAM2_PLAYER',
	GET_TEAM1_PLAYERS: 'GET_TEAM1_PLAYERS',
	GET_TEAM2_PLAYERS: 'GET_TEAM2_PLAYERS',
	RESET_TEAMS: 'RESET_TEAMS',
};

let URI = '';

export const getPlayers = () => {
	return dispatch =>
		fetch(`${URI}/players`)
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: GET_PLAYERS,
					payload: json,
				});
			});
};

export const addNewPlayer = player => {
	return dispatch =>
		fetch(`${URI}/players/${player}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(player),
		})
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: 'ADD_PLAYER',
					payload: json,
				});
			});
};

export const removePlayer = playerId => {
	return dispatch =>
		fetch(`${URI}/players/${playerId}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(playerId),
		})
			.then(res => res.json())
			.then(json =>
				dispatch({
					type: 'REMOVE_PLAYER',
					payload: json,
				})
			);
};

export const assignTeam1Player = player => {
	return dispatch =>
		fetch(`${URI}/team1/${player}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(player),
		})
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: 'SET_TEAM1_PLAYER',
					payload: json,
				});
			});
};

export const assignTeam2Player = player => {
	return dispatch =>
		fetch(`${URI}/team2/${player}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(player),
		})
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: 'SET_TEAM2_PLAYER',
					payload: json,
				});
			});
};

export const getTeam1Players = () => {
	return dispatch =>
		fetch(`${URI}/team1`)
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: 'GET_TEAM1_PLAYERS',
					payload: json,
				});
			});
};

export const getTeam2Players = () => {
	return dispatch =>
		fetch(`${URI}/team2`)
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: 'GET_TEAM2_PLAYERS',
					payload: json,
				});
			});
};

export const getPlayerStats = playerId => {
	return dispatch =>
		fetch(`${URI}/player/${playerId}`)
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: GET_PLAYER_STATS,
					payload: json,
				});
			});
};

export const setPlayerStats = player => {
	return dispatch =>
		fetch(`${URI}/player/${player}`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(player),
		})
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: 'ADD_PLAYER',
					payload: json,
				});
			});
};

export const resetTeams = () => {
	return dispatch =>
		dispatch({
			type: RESET_TEAMS,
		});
};
